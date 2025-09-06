# 🍕 Swiggy Clone - Modern Food Delivery App

A feature-rich, responsive food delivery application built with modern React ecosystem, replicating the core functionality of Swiggy with a beautiful, intuitive user interface.

![Swiggy Clone](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-purple?style=for-the-badge&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css)
![Parcel](https://img.shields.io/badge/Parcel-2.15.4-E65F00?style=for-the-badge&logo=parcel)

## ✨ Features

- 🔍 **Smart Restaurant Search** - Find your favorite restaurants instantly
- 🛒 **Shopping Cart** - Add/remove items with persistent state management
- 🌐 **Offline Support** - Works seamlessly even when you're offline
- 🌙 **Dark Mode** - Toggle between light and dark themes with system preference detection
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Lightning Fast** - Built with Parcel bundler for optimal performance
- 🔄 **Real-time Updates** - Dynamic content loading with custom hooks
- 💫 **Smooth Animations** - Beautiful loading shimmer effects and transitions

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **React DOM 19.1.0** - Optimized DOM rendering

### State Management
- **Redux Toolkit 2.8.2** - Modern Redux with simplified syntax
- **React Redux 9.2.0** - Official React bindings for Redux
- **React Context API** - Local state management for dark mode

### Routing
- **React Router DOM 6.23.1** - Declarative routing with modern hooks

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS post-processing
- **Autoprefixer 10.4.21** - Automatic vendor prefixing

### Build Tools
- **Parcel 2.15.4** - Zero-configuration build tool
- **Cross-env 10.0.0** - Cross-platform environment variables

### Custom Hooks
- **useOnlineStatus** - Network connectivity detection
- **useResdata** - Restaurant data fetching
- **useResmenu** - Restaurant menu management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/swiggy-clone.git
   cd swiggy-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.js         # About page
│   ├── Body.js          # Main homepage body
│   ├── Cart.js          # Shopping cart
│   ├── Contact.js       # Contact page
│   ├── Error.js         # Error boundary
│   ├── Header.js        # Navigation header
│   ├── RestaurantMenu.js # Restaurant details
│   ├── Rescard.js       # Restaurant card component
│   └── Shimmer.js       # Loading skeleton
├── utils/               # Utilities and hooks
│   ├── appStore.js      # Redux store configuration
│   ├── cartSlice.js     # Cart state management
│   ├── darkModeContext.js # Dark mode context
│   ├── useOnlineStatus.js # Online status hook
│   └── constants.js     # App constants
├── app.js              # Main app component
└── style.css           # Global styles
```

## 🎯 Key Features Implementation

### Redux State Management
- **Global Cart State** - Persistent shopping cart across routes
- **Redux Toolkit** - Simplified state management with modern patterns

### Dark Mode Support
- **System Preference Detection** - Automatically detects user's OS theme
- **Local Storage Persistence** - Remembers user's theme choice
- **Smooth Transitions** - Animated theme switching

### Performance Optimization
- **Code Splitting** - Route-based lazy loading
- **Shimmer Loading** - Beautiful skeleton screens
- **Optimized Bundling** - Parcel's automatic optimizations

### Responsive Design
- **Mobile-First Approach** - Optimized for mobile devices
- **Flexible Layouts** - CSS Grid and Flexbox
- **Touch-Friendly** - Optimized for touch interactions

## 🌟 Advanced Features

- **Custom Hooks** for reusable logic
- **Error Boundaries** for graceful error handling
- **Offline Detection** with visual indicators
- **Modern ES6+** syntax throughout
- **Component Composition** patterns
- **Accessibility** considerations


## 🙏 Acknowledgments

- Inspired by Swiggy's design and functionality
- Built as a learning project to master modern React ecosystem
- Special thanks to the React and Redux communities

---

**Built with ❤️ by [Yash]**

*Enjoying the project? Give it a ⭐!*
