# 🌾 Rural Access Platform

A simple web platform to help rural users book essential products like groceries, water, seeds, and education kits. Includes user authentication, item booking, a dashboard to view bookings, and a contact form to reach admins.

---

## 🔧 Features

- ✅ User Signup & Login (with localStorage)
- ✅ Booking essential items (checkbox selection)
- ✅ View booked items in dashboard
- ✅ Logout functionality
- ✅ Contact Us form with message saving
- ✅ MongoDB backend (Mongoose)
- ✅ Node.js + Express API
- ✅ Mobile responsive design (Bootstrap)



## 🎯 Working Process

### 1. User Registration
- Visit `signup.html`
- Fill in full name, email, and password
- Account is saved in MongoDB
- 

### 2. Login
- Visit `signin.html`
- Enter credentials
- On success:
  - User data is saved in `localStorage`
  - Redirected to `home.html`

### 3. Booking Products
- On `home.html`, a list of products is shown
- User selects multiple items via checkboxes
- Click **"Book Selected Items"**
- Booking is stored in MongoDB with user's email
- Form clears automatically after booking
- If not logged in, user sees alert

### 4. View Bookings
- Go to `dashboard.html`
- Booked items are fetched from backend using email stored in localStorage
- Items appear in a styled list/card layout

### 5. Logout
- Click **Logout** button in Navbar
- Clears localStorage and redirects to login

### 6. Contact Form
- On `home.html`, scroll to **Contact Us**
- Fill in name and message
- On submit:
  - Data saved in MongoDB
  - Form resets with success alert

----
