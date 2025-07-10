# 🌾 SmartHarvest – Full Stack Tax Harvesting App

SmartHarvest is a modern, mobile-optimized tax harvesting web app that helps investors upload CSV files of stock transactions and analyze short-term and long-term capital gains, view detailed charts, calculate taxes, and export the report as PDF — all in a beautiful, responsive UI.

---

## 🚀 Features

- 📤 Upload CSV to process gain/loss data
- 📊 Interactive Gain/Loss chart
- 🎯 Filter by Short-Term / Long-Term
- 💸 Tax calculator (Old & New Regimes)
- 🌓 Dark/Light theme toggle
- 📄 Export full report as PDF
- ♻️ Reset for new file uploads
- 📱 Fully mobile-responsive like real apps
- ✅ Built using React + Tailwind + Flask

---

## 🧱 Tech Stack

| Layer     | Tech Used                    |
|-----------|------------------------------|
| Frontend  | React, Tailwind CSS, Recharts, html2pdf.js |
| Backend   | Python, Flask, Pandas         |
| Tools     | Vite, npm, Vercel (for deploy) |

---

## 📁 Folder Structure

SmartHarvestApp/
├── frontend/ # React App
│ ├── src/
│ ├── public/
│ └── package.json
├── backend/ # Flask App
│ ├── app.py
│ ├── tax_utils.py
│ └── requirements.txt
├── README.md # This file
└── .gitignore


---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/SmartHarvestApp.git
cd SmartHarvestApp
2️⃣ Start the Backend (Flask)
bash
Copy
Edit
cd backend
python -m venv venv
venv\Scripts\activate        # On Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py                # Runs on http://localhost:5000
3️⃣ Start the Frontend (React)
bash
Copy
Edit
cd ../frontend
npm install
npm start                    # Runs on http://localhost:3000