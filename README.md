
Calmly: AI-Powered Mental Health Monitoring System 🌿
A web-based AI solution that predicts user stress levels using NLP and Machine Learning, and provides personalized stress-relief tools through an interactive chatbot interface.
```

#### 🌟 Features
- ✅ Stress level prediction (scale of 1–10)
- 🤖 Chatbot interaction (`Calmly`)
- 🧘 Meditation & Relaxation music
- 📚 Mental Health Resources & Articles
- 🔒 Secure user login (in progress)
- 💪 Fitness and Nutrition suggestions

 🚀 Live Demo

- Frontend: (this is front end repo)
- Backend API: [FastAPI Docs](https://stress-monitoring-backend.onrender.com/docs)

🛠️ Tech Stack
- Frontend: `ReactJS`, `HTML`, `CSS`
- Backend: `FastAPI`, `Python`
- ML: `Random Forest`, `TF-IDF`, `NLTK`
- Tools: `Render`, `GitHub`, `Postman`, `Canva`, `Figma`

 📦 Setup Instructions
```bash
# Clone the repo
git clone repo......

npm install
npm start
```
# Install dependencies
cd backend (from backend repo -> https://github.com/sarandeep9596/stress_monitoring_backend)
pip install -r requirements.txt

# Run FastAPI backend
uvicorn main:app --reload



 📸 Screenshots
You can add:
- Home page
- ![image](https://github.com/user-attachments/assets/16d4d9c3-04a4-49f8-aca4-d12577e9fce9)

- Chatbot prediction
- 
- Meditation page
- ![image](https://github.com/user-attachments/assets/84bd48b0-b531-4df8-a028-c51ccc746e12)

- Articles section
![image](https://github.com/user-attachments/assets/2ec662c3-a21a-4a67-b48a-c9dadd4b16e8)

#### 🧠 How It Works
- User enters text input
- FastAPI backend preprocesses text, predicts stress level using ML model
- Based on the result, user gets personalized suggestions via chatbot

#### 📁 Project Structure
```
project/
│
├── backend/
│   ├── main.py
│   ├── model.pkl
│   ├── tfidf_vectorizer.pkl
│   └── requirements.txt
│
│--├── src/
│   └── package.json
│
└── README.md
```

