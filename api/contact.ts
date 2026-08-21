import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Simple in-memory IP rate limiter (per serverless instance)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Only POST requests are accepted.' });
  }

  // Client IP rate limiting
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many contact requests from this IP. Please try again later.' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ error: 'Name must be between 2 and 100 characters.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 2 || subject.trim().length > 150) {
    return res.status(400).json({ error: 'Subject must be between 2 and 150 characters.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 5000) {
    return res.status(400).json({ error: 'Message must be between 10 and 5000 characters.' });
  }

  // Check Resend API key configuration
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'Email service is not configured yet. Please email me directly.',
      unconfigured: true
    });
  }

  try {
    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_EMAIL || 'vamsilakshmisatyakoppineedi@gmail.com';

    const emailResponse = await resend.emails.send({
      from: 'Satya Portfolio <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `New message from Satya's portfolio.

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
`
    });

    if (emailResponse.error) {
      console.error('Resend API Error:', emailResponse.error);
      return res.status(500).json({ error: 'Failed to deliver message via email provider.' });
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Unexpected contact handler error:', err);
    return res.status(500).json({ error: 'An unexpected server error occurred.' });
  }
}
