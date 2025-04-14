
---

# 🚗 Car Finder Web App

**Car Finder Web App** is a responsive and user-friendly platform designed to help users search, filter, and explore a wide range of cars based on various criteria. Built with modern web technologies, this application offers a seamless experience for users looking to find their ideal vehicle.

## 🌟 Features

- **Comprehensive Car Listings:** Browse through an extensive collection of cars with detailed information.
- **Advanced Search & Filters:** Filter cars by brand, fuel type, seating capacity, and sort by price.
- **Wishlist Functionality:** Add your favorite cars to a wishlist for easy access later.
- **Dark Mode Support:** Toggle between light and dark themes for a comfortable viewing experience.
- **Pagination:** Navigate through car listings efficiently with paginated views.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

- **Frontend:**
  - [React.js](https://reactjs.org/) – JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) – Next-generation frontend tooling for fast development.
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – Styling and layout.
- **State Management:**
  - **React Context API** – Utilized for managing global state, such as the wishlist and theme preferences, allowing for efficient data sharing across components without prop drilling.
- **Backend:**
  - [Node.js](https://nodejs.org/) – JavaScript runtime environment.
  - [Express.js](https://expressjs.com/) – Web framework for Node.js.
- **Data Handling:**
  - RESTful APIs – Fetch and manage car data.
- **Version Control:**
  - [Git](https://git-scm.com/) & [GitHub](https://github.com/) – Source code management and collaboration.

## 📁 Project Structure

```
Car-Finder-Web-App/
├── public/
├── src/
│   ├── assets/
│   │   └── images/         # Car images
│   ├── components/         # Reusable components (CarCard, Filters, etc.)
│   ├── context/            # Context API for global state
│   ├── pages/              # Page components (Home, etc.)
│   ├── styles/             # CSS files
│   └── App.jsx             # Main application component
├── server/                 # Backend server files
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for version control.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abhay-2108/Car-Finder-Web-App.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Car-Finder-Web-App
   ```

3. **Install frontend dependencies:**

   ```bash
   npm install
   ```

4. **Navigate to the backend directory and install dependencies:**

   ```bash
   cd server
   npm install
   ```

5. **Start the backend server:**

   ```bash
   npm start
   ```

6. **Start the frontend development server:**

   ```bash
   cd ..
   npm run dev
   ```

7. **Access the application:**

   Open your browser and navigate to `http://localhost:5173`.

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/c6115b16-025b-4331-8044-b10caf271ad3)


## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
