# Portfolio Website

A personal portfolio built with React and Vite, deployed to Vercel via a custom GitHub Actions CI/CD pipeline.

🔗 Live Site: https://abbyrigsby.vercel.app

---

## Tech Stack

| Dependency     | Purpose                                              |
|----------------|------------------------------------------------------|
| Vite           | Fast build tooling and local dev server              |
| React.js       | Component-based UI architecture                      |
| TailwindCSS    | Utility-first CSS styling                            |
| React-Toastify | Toast notifications for user feedback                |
| Lucide-React   | Consistent, lightweight icon library                 |

---

## Prerequisites

- Node.js v18 or higher (https://nodejs.org/)
- npm (bundled with Node)
- An EmailJS account with a configured email service and template (https://www.emailjs.com/)

---

## Local Development

1. Clone the repository

   git clone https://github.com/AbbyyRigsby/Portfolio-Website.git
   cd Portfolio-Website

2. Configure environment variables

   Copy the example env file and fill in your EmailJS credentials:

   cp .env.example .env

   Required variables:

   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key

3. Install dependencies and start the dev server

   npm install
   npm run dev

The site will be available at http://localhost:5173.

---

## Deployment

### Option 1: Vercel Dashboard (Quick Start)

1. Push your fork to GitHub.
2. Open Vercel (https://vercel.com) and create a new project linked to your repository.
3. Set the following build configuration:
   - Install command:  npm install
   - Build command:    npm run build
   - Output directory: dist (default)
4. Import your .env variables via the Vercel dashboard under Environment Variables.
5. Deploy.

### Option 2: GitHub Actions (CI/CD Pipeline)

This repo uses a GitHub Actions workflow (.github/workflows/) to build and deploy to Vercel
automatically on every push to main. This approach allows additional jobs (linting, testing,
etc.) to be inserted into the pipeline.

Step 1 — Link your local project to Vercel

Run the following and follow the prompts to link your repo to an existing Vercel project:

   npx vercel link

This creates a .vercel/project.json file containing your projectID and orgID.

Step 2 — Create a Vercel deployment token

In Vercel, go to Settings → Tokens, create a new token scoped to your project, and note the value.

Step 3 — Add GitHub repository secrets

In your GitHub repo, go to Settings → Secrets and variables → Actions and add:

| Secret Name          | Value                        |
|----------------------|------------------------------|
| VERCEL_ORG_ID        | Your Vercel organization ID  |
| VERCEL_PROJECT_ID    | Your Vercel project ID       |
| VERCEL_TOKEN         | The token created in Step 2  |

Step 4 — Push the workflow

Commit and push the .github/ folder. The Actions workflow will trigger on the next push to main.

⚠️  Do not push .github/ before completing Steps 1–3, or the workflow will fail on first run.

---

## License

This project is open source and available under the MIT License.
