# Personal Portfolio Website

This is a personal portfolio website built with Next.js, React, and Tailwind CSS, designed to be easily customizable. It features a dynamic "hyperspeed" background effect using Three.js and showcases skills, experience, projects, and contact information.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## How to Customize

All the personal data for the portfolio is centralized in a single file for easy editing.

- **File Path**: `src/lib/data.ts`

Open this file to change the following information:
-   **Personal Info**: Your name, tagline, summary, contact details, and social media links.
-   **Navigation**: The links in the header.
-   **Skills**: Your programming languages, frameworks, and tools.
-   **Experience**: Your work history.
-   **Projects**: Your featured projects, including descriptions and links.
-   **Certifications & Leadership**: Any other accolades or roles you want to highlight.

### Changing the Profile Picture

1.  Place your photo in the `public/` directory (e.g., `public/my-photo.jpg`).
2.  Update the image path in `src/app/components/sections/hero.tsx`.

### Changing the Resume

1.  Place your resume PDF in the `public/` directory (e.g., `public/resume.pdf`).
2.  The "Download Resume" button in `src/app/components/sections/hero.tsx` is already configured to download a file named `resume.pdf`. If you use a different name, make sure to update the `href` and `download` attributes on the `Link` component.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **UI Library**: [React](https://reactjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
-   **Animations**: [Three.js](https://threejs.org/) & [postprocessing](https://github.com/pmndrs/postprocessing) for the background effect.
-   **Deployment**: This project is ready to be deployed on services like Vercel or Firebase App Hosting.
