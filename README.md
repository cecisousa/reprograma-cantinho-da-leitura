# 📚 Cantinho da Leitura

A modern and interactive web application dedicated to the world of reading, built with Next.js. Explore books, discover new authors, and receive personalized recommendations!

## ✨ Features

- **🏠 Home Page**: Welcoming presentation of the project
- **📖 Why Read**: Informative section with data and motivations about the importance of reading
- **⭐ Best of the Week**: List of the week's best-selling books, integrated with The New York Times API
- **🔍 Author Search**: Search and discover articles and books related to your favorite authors
- **🎲 Special Tip**: Receive random book recommendations with a simple click

## 🛠️ Technologies

- **[Next.js 16.1.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - JavaScript library for user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - Traditional CSS with component-scoped stylesheets
- **[Axios](https://axios-http.com/)** - HTTP client for API requests

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reprograma-cantinho-da-leitura/cantinhodaleitura
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
reprograma-cantinho-da-leitura/
├── cantinhodaleitura/            # Main Next.js application
│   ├── app/                      # Pages and routes (App Router)
│   │   ├── busca-autores/        # Author search page
│   │   │   └── components/      # Page-specific components
│   │   ├── dica-especial/        # Random recommendations page
│   │   │   └── components/      # Page-specific components
│   │   ├── melhores-da-semana/   # Best-sellers page
│   │   │   └── components/      # Page-specific components
│   │   ├── por-que-ler/          # Informative reading page
│   │   │   └── components/      # Page-specific components
│   │   ├── layout.tsx            # Main layout
│   │   └── page.tsx              # Home page
│   ├── components/               # Reusable components
│   │   ├── Button/               # Button component
│   │   ├── Footer/               # Footer
│   │   ├── Header/               # Header
│   │   ├── Intro/                # Intro component
│   │   └── Nav/                  # Navigation
│   │       └── Menu/            # Menu subcomponent
│   ├── public/                   # Static files
│   ├── service/                  # API services
│   │   ├── dicas.ts              # Recommendations service
│   │   └── nytimes.ts            # NY Times service
│   └── package.json              # Dependencies and scripts
└── db.json                       # JSON Server database
```

## 🔌 API Integrations

### The New York Times Books API
- **Best of the Week**: List of best-selling books
- **Author Search**: Articles and reviews related to authors

### JSON Server (Typicode)
- **Special Tip**: Book database for random recommendations

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint linter

## 🎨 Design Features

- Responsive and modern design
- Intuitive and accessible interface
- Optimized images and efficient loading
- Smooth navigation between pages

## 🌐 Deployment

The application is deployed on [Vercel](https://vercel.com). For more information about deployment, see the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is private.

## 👥 Contributing

This is a personal/educational project. Contributions are welcome through issues and pull requests!

---

Developed with ❤️ for book lovers
