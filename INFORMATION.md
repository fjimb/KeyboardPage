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
│   ├── components/          # Reusable UI components (Navbar, Footer, Button, etc.)
│   ├── context/             # React Context API for global state (cart, auth)
│   │   └── CartContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useCart.ts       # Hook for cart state and actions
│   │   └── useProducts.ts   # Hook for fetching/managing products
│   ├── pages/               # Route-level page components
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── ProductDetail/
│   │   └── Products/
│   ├── services/            # API layer — HTTP calls to the Spring Boot backend
│   │   └── api.ts
│   ├── types/               # Shared TypeScript type definitions and interfaces
│   │   └── index.ts
│   ├── App.tsx
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
