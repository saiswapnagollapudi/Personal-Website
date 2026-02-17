# Sai Swapna Gollapudi's Personal Portfolio

A modern, responsive portfolio website showcasing experience in data science, machine learning, and cloud technologies.

## 🎯 Overview

Data Scientist & ML Engineer with 8+ years of experience building intelligent systems and scalable ML architectures. Currently at Amazon, focused on personalized learning platforms, abuse detection systems, and LLM-driven solutions.

## Project Features

✅ **Professional Portfolio** - Showcase your experience and projects
✅ **About & Experience** - Detailed work history and education  
✅ **Skills Section** - Display technical expertise and tools
✅ **Blog System** - Share articles and insights
✅ **Contact Integration** - Easy way for visitors to reach you
✅ **Responsive Design** - Perfect on all devices
✅ **Dark Mode** - Built-in dark mode support
✅ **Performance Optimized** - Fast static site generation

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saiswapnagollapudi/Personal-Webiste.git
cd Personal-Webiste
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Export as Static Site

```bash
npm run export
```

## Project Structure

```
Personal-Webiste/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
├── lib/               # Utility functions
├── blog/              # Markdown blog posts
├── public/            # Static files
└── package.json       # Dependencies
```

## Adding Blog Posts

Create a new markdown file in the `blog/` directory:

```markdown
---
title: Your Post Title
date: 2024-01-10
author: Your Name
excerpt: A brief excerpt of your post
---

# Your Post Title

Your content here...
```

## Deployment to GitHub Pages

To deploy to GitHub Pages:

1. Update the `basePath` in `next.config.js` if needed
2. Build the static site:
```bash
npm run export
```

3. The `out/` directory contains your static site

4. Deploy using GitHub Pages

## Customization

The portfolio has been pre-populated with your professional information:
- ✅ Name and professional summary
- ✅ Work experience (Amazon, Capital One, Tata Consultancy Services)
- ✅ Education (Indiana University, JNTU)
- ✅ Technical skills and competencies
- ✅ LinkedIn and GitHub profiles

To further customize:
- Update social links in the Footer component
- Add your own blog posts to the `blog/` folder
- Modify colors in `tailwind.config.ts`
- Add additional projects or experiences to the About page

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blog**: Gray Matter + Markdown
- **Deployment**: GitHub Pages / Vercel

## License

This project is open source and available under the MIT License.

## Contact

- Website: [saiswapnagollapudi.com](https://saiswapnagollapudi.com)
- LinkedIn: [Sai Swapna Gollapudi](https://www.linkedin.com/in/sai-swapna-gollapudi-316a83a2/)
- GitHub: [@saiswapnagollapudi](https://github.com/saiswapnagollapudi)
