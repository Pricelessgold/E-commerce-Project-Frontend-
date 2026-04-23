# 🛒 LebenPro Store

A React-based e-commerce application that allows users to browse products, filter and sort them, and manage a shopping cart.



## 🚀 Features

- 🏠 Homepage with featured products  
- 🛍️ Products page with:
  - Search by name
  - Category filtering
  - Sorting (price & rating)
- 🛒 Shopping cart with global state (Context API)
- ⭐ Product ratings and details toggle  
- ❤️ Favorite toggle  



## 🧠 Tech Stack

- React (Hooks & Functional Components)  
- React Router DOM  
- Context API  
- Tailwind CSS  
- DummyJSON API  



## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── Products.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Filters.jsx
│   └── Cart.jsx
├── context/
│   └── CartContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```



## 🔄 How It Works

- Products are fetched from an API  
- Users can search, filter, and sort products  
- Cart state is managed globally using Context API  
- Routing allows navigation between pages without reload  



## 🛠️ Installation

```bash
git clone https://github.com/your-username/lebenpro-store.git
cd lebenpro-store
npm install
npm run dev
