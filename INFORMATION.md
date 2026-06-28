# ⌨️ KeyboardPage

> A keyboard e-commerce platform focused on mechanical, induction, and magnetic keyboards — built with a modern stack and a cool programming environment in mind.

---

## 🧰 Tech Stack

### Frontend
| Technology | Description |
|------------|-------------|
| ⚛️ React + TypeScript | UI framework with strict typing |
| ⚡ Vite | Lightning-fast bundler and dev server |
| 📦 pnpm | Fast, disk-efficient package manager |
| 🔀 React Router v7 | Client-side routing and navigation |
| 🎨 Tailwind CSS v4 | Utility-first CSS framework |
| 🌼 DaisyUI v5 | Component library plugin for Tailwind CSS |

### Backend
| Technology | Description |
|------------|-------------|
| Spring Boot🍃| REST API framework |
| Postgress 🐘 | Relational database |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- pnpm >= 8
- Java >= 17
- MySQL

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Zul-99/KeyboardPage.git
cd KeyboardPage

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Run with Maven
./mvnw spring-boot:run
```

---

## 📁 Project Structure

```
KeyboardPage/
├── src/
│   ├── assets/
│   │   ├── images/          # Project images (hero banners, product photos, etc.)
│   │   └── icons/           # SVG and icon assets
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Top navigation bar con enlaces a rutas
│   │   ├── Footer.tsx       # Pie de página
│   │   └── ui/              # Primitivos UI genéricos
│   ├── pages/               # Componentes de página por ruta
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── ProductDetail/
│   │   └── Products/
│   ├── App.tsx              # Componente raíz con rutas de React Router
│   └── main.tsx
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 👥 Contributors

| Name | GitHub | Role |
|------|--------|------|
| Felipe | [@fjimb](https://github.com/fjimb) | Full Stack |
| Drayer | [@Drayer-Duran](https://github.com/Drayer-Duran) | Full Stack |

---

## 📄 License

This project is for fun but not for distribution.
