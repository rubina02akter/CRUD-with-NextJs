# CRUD Operation using Next.js

## 📚 Subject
Web Development with Next.js  
**Topic:** Building a Simple CRUD Application using Next.js and MongoDB  
**Level:** Intermediate  


---

## 🎯 Objective
Develop a fully functional CRUD (Create, Read, Update, Delete) web application using **Next.js** and **MongoDB** (without Mongoose). This application allows users to create, view, edit, and delete items through a clean and responsive interface.

---

## 🔧 Technologies Used
- **Next.js (App Router)**
- **MongoDB (No Mongoose)**
- **Tailwind CSS**
- **Vercel (Deployment)**
- **Environment Variables (.env)**

---

## 📦 Features

### ✅ Functional Requirements (CRUD)

1. **GET (Read)**  
   - Fetches all data from MongoDB.
   - Displays each entry as a card on the **Home** page.
   - Each card includes:
     - Task/Product title
     - Description
     - Created Date
     - Image (from imgBB URL)
     - Category
     - Creator Info (Name & Email)
     - Action Buttons: `Delete`, `Edit`, `Details`

2. **POST (Create)**  
   - A separate `/add` route with a form.
   - On form submission, data is sent to MongoDB using a POST request.

3. **DELETE**  
   - Each card includes a `Delete` button to remove the entry from the database.

4. **UPDATE (Edit)**  
   - Each card has an `Edit` button linking to `/edit/[id]`.
   - The user can modify and update the data in MongoDB.

5. **DETAILS**  
   - Each item links to `/details/[id]`, displaying full information.

---

## 🖼️ Design & UI
- Clean and responsive layout
- User-friendly and intuitive interface
- Basic styling with Tailwind CSS
- Reusable components for cards, forms, and buttons

---

## 📌 Must Implement

- ✅ Loading indicator while fetching data
- ✅ Custom `Not Found` page
- ✅ Custom `Error` page
- ✅ Use `.env.local` for MongoDB URI securely

---

## 🚀 Live Preview & Repository

- 🔗 **Live URL:** https://crud-operation-with-next-js.vercel.app/
- 💻 **GitHub Repository:** https://github.com/rubina02akter/CRUD-operation-with-NextJs

---

## 🛠️ Getting Started Locally

### 🔑 Prerequisites

- Node.js (v18+ recommended)
- MongoDB account
- `imgbb.com` for image URLs

### 📥 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rubina02akter/CRUD-operation-with-NextJs.git
   cd your-repo-name


## Install dependencies:
npm install

## Create .env.local file and add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string

## Run the development server:
npm run dev
