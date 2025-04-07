# React Native Auth App

A secure and modern authentication flow built with **React Native CLI** and TypeScript.

---

### 📹 Demo Video

[Demo Video](https://drive.google.com/file/d/1bgXHAFH2LDUWtDsfqNxCOtFqhqcCb0Sg/view?usp=sharing)

## 📸 Screenshots

### 🔐 Login Screen 📝 Signup Screen 🏠 Home Screen

![Login Screen](app/assets/screenshots/login.png)
![Signup Screen](app/assets/screenshots/signup.png)
![Home Screen](app/assets/screenshots/home.png)

---

## 🚀 Features

- 🔐 **Signup/Login** with email & password
- 💾 Stores users **individually** in AsyncStorage (`user_email@example.com`)
- 🔑 **SHA-256 hashed passwords** using `crypto-js`
- ✅ Validates form fields with **Formik + Yup**
- 👁️ Toggle password visibility (eye icon)
- 🧠 **Persistent login** after app restart
- 🦄 **Lottie animations** for delightful UI (on Login & Signup screens)
- 👤 Shows user’s **name and email** on Home screen

---

## 📦 Tech Stack

- **React Native (CLI)**
- **TypeScript**
- **React Navigation**
- **AsyncStorage**
- **Formik + Yup**
- **CryptoJS (SHA-256)**
- **Lottie React Native**

---

## ⚙️ Requirements

- Node.js: **v20** recommended
- npm: **v9+**
- React Native CLI (not Expo)

> Check your versions:

```bash
node -v
npm -v
npx react-native --version
```

---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/hamzaali278/Kloudius-Assesment.git
cd Kloudius-Assesment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required Libraries

```bash
npm install @react-native-async-storage/async-storage
npm install crypto-js
npm install react-native-vector-icons
npm install lottie-react-native lottie-ios
npm install formik yup
```

### 5. iOS Only: Install Pods

```bash
cd ios && pod install && cd ..
```

---

## ▶️ Run the App

```bash
npm run android
# or
npm run ios
```

---

## 📁 Folder Structure

```
app/
├── assets/          # Images, fonts, lottie animations, etc.
│   └── screenshots/ # Login, signup, home screen images
├── data/            # Mock data, static files
├── hooks/           # Custom React hooks
├── components/      # Custom components
├── navigation/      # Stack and navigation setup
├── screens/         # Login, Signup, Home, etc.
├── services/        # Business logic, API helpers, storage
└── store/           # Context, state management (AuthContext)
App.tsx              # Root component
```
