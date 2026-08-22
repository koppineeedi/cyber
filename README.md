# Satya Koppineedi — Cybersecurity Professional Portfolio

A modern, high-performance cybersecurity personal portfolio website built for **Koppineedi Vamsi Lakshmi Satya Kumari (Satya)** — Aspiring SOC Analyst, Cybersecurity Enthusiast, and Blue Team Learner.
https://satya-cybersecurity-portfolio.vercel.app/
---

## Tech Stack

- **Frontend Framework**: React 19 + TypeScript + Vite
- **Styling & Design**: Tailwind CSS v4 + Custom Glassmorphism System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend / Contact**: Vercel Serverless Function (`api/contact.ts`) + Resend SDK
- **Deployment**: Vercel Ready

---

## Features

- 🛡️ **Modern SOC Dashboard Theme**: Deep navy background with cyan & electric blue neon accents, frosted glass panels, subtle grid patterns, and live node status widgets.
- ⚡ **Interactive Security Visual**: Decorative SOC monitor with operational indicators, network node visualization, and status telemetry.
- 🎓 **Academic Education Timeline**: Highlights B.Tech CSE (Cybersecurity) with 8.96 CGPA, Diploma (83.09%), and SSC (8.6 GPA).
- 🛠️ **Categorized Skills Matrix**: Grouped across Security Tools, Networking, Cybersecurity, Programming Languages, Web & Backend, and Technologies (strictly zero fake progress bars).
- 🚀 **Featured Projects & Modal**: Interactive category filtering across 8 projects with detailed security relevance modals and dark-themed preview frames.
- 🔒 **Verified Credentials & Badges**: 10 Credly verified badges, Cisco Networking Academy credential, Microsoft Learn achievement badge, and Infosys Springboard profile.
- 📩 **Serverless Contact Form**: Fully functional contact form API powered by Vercel Serverless Functions and Resend with input sanitization, rate limiting, and email delivery to `vamsilakshmisatyakoppineedi@gmail.com`.
- ♿ **Accessibility & SEO**: Accessible keyboard navigation, focus states, semantic HTML, and OpenGraph/Twitter social cards.

---

## Quick Start (Local Development)

### 1. Prerequisites
- Node.js >= 18
- npm or pnpm

### 2. Installation
```bash
git clone https://github.com/koppineeedi/satya-portfolio.git
cd satya-portfolio
npm install
```

### 3. Environment Variables Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Resend credentials:
```env
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_EMAIL=vamsilakshmisatyakoppineedi@gmail.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build

To test the production bundle locally:
```bash
npm run build
npm run preview
```

---

## Vercel Deployment Guide

1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. In Project Settings -> **Environment Variables**, add:
   - `RESEND_API_KEY` (Your Resend API Key)
   - `CONTACT_EMAIL` (`vamsilakshmisatyakoppineedi@gmail.com`)
4. Click **Deploy**. Vercel will automatically host the static frontend and mount the serverless route `/api/contact`.

---

## Contact API & Resend Configuration

The contact form sends requests to `/api/contact.ts`.

- **Method**: `POST`
- **Validation**:
  - `name`: 2–100 characters
  - `email`: Valid email format
  - `subject`: 2–150 characters
  - `message`: 10–5000 characters
- **Rate Limiting**: Integrated IP request throttling (5 requests per 15 min per IP)
- **Fallback**: If `RESEND_API_KEY` is not present, the UI cleanly notifies the user and provides a direct `mailto:` fallback button to email Satya directly.

---

## Security Notes

- Zero client-side API secrets (Resend key is stored securely in environment variables).
- Input sanitization and length bounds on serverless API endpoints.
- No `dangerouslySetInnerHTML` or raw script injection vectors.
- Secure external links with `target="_blank" rel="noopener noreferrer"`.
