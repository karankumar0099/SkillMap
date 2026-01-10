# SkillMap Project Documentation (Code Walkthrough)

Ye document poore project ka structure aur code explain karta hai, taaki aap isse easily samajh sakein aur kisi aur ko bhi समझा sakein.

---

## 1. Project Overview
**SkillMap AI** ek educational app hai jo users ko alag-alag skills (jaise React, Python) seekhne ke liye "Roadmaps" (learning paths) deta hai.

### Key Folders (Folders ka matlab):
- **`src/`**: Sara main code yahan hai.
  - **`Components/`**: Chote tukde jo bar-bar use hote hain (Navbar, Footer, RoadmapNode).
  - **`Pages/`**: Alag-alag pages (Home Page, Skills Page, Contact Page).
  - **`data/`**: Project ka data (roadmaps ki details).

---

## 2. File-by-File Explanation

### A. `src/main.jsx` (Entry Point)
Ye file project ka darwaza (entry gate) hai. Sabse pehle yahi run hoti hai.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ErrorBoundary: Ye ek suraksha kawach (safety shield) hai. 
// Agar App me koi error aata hai, to ye puri site crash hone ke bajaye ek "Something went wrong" message dikhata hai.
class ErrorBoundary extends React.Component {
  // ... (error pakadne ka logic)
}

// Yahan hum 'root' element (jo index.html me hai) ke andar apni 'App' ko daal rahe hain.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

---

### B. `src/App.jsx` (Routing/Navigation)
Ye file "Traffic Police" ki tarah hai. Ye decide karti hai ki kaunse URL par kaunsa Page dikhana hai.

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ... saare pages import kiye

const PageWrapper = ({ children }) => (
  // Ye har page transition pe animation add karta hai (fade-in effect).
  <div className="page-animate">
    {children}
  </div>
);

const App = () => {
  return (
    // BrowserRouter: Navigation enable karta hai.
    <BrowserRouter>
      <Navbar />  {/* Navbar har page par dikhega */}
      
      <Routes>
        {/* Agar URL '/' hai to Home page dikhao */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        
        {/* Agar URL '/skills' hai to Skills page dikhao */}
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        
        {/* Dynamic Id: ':id' ka matlab kuch bhi aa sakta hai (e.g., roadmap/react, roadmap/python) */}
        <Route path="/roadmap/:id" element={<PageWrapper><Roadmap /></PageWrapper>} />
        
        {/* ... aur baaki routes */}
      </Routes>
      
      <Footer /> {/* Footer bhi har page par dikhega */}
    </BrowserRouter>
  );
};
```

---

### C. `src/Pages/Hero/Home.jsx` (Home Page)
Ye Website ka pehla page hai.

- **`hero-section`**: Bade text aur "Start Skill Map" button wala area.
- **`StartIcon`**: Ye ek SVG component hai (wo teer/arrow ka icon).
- **`commonSkills`**: Ek list hai skills ki (HTML, CSS etc.) jo scroll animation me dikhti hai.
- **`scroll-container`**: Wo chalti hui skills ki patti (marquee effect).

---

### D. `src/Pages/SkillInput/SkillInput.jsx` (Input Form)
Ye wo page hai jahan user batata hai use kya seekhna hai.

**Logic:**
1.  **`useState`**: `formData` naam ka ek state banaya jo user ke input (skill, level, time) ko save rakhta hai.
2.  **`handleInputChange`**: Jab user type karta hai, ye function `formData` ko update karta hai.
3.  **`handleSubmit`**: Jab button dbta hai:
    *   Form check karta hai: Agar user ne "React" likha hai, to use "react" roadmap pe bhej do.
    *   Nahi to default "frontend" roadmap pe bhej do (kyunki abhi humare paas limited roadmaps hain).
    *   `navigate('/roadmap/...')` user ko naye page par le jata hai.

---

### E. `src/Components/Roadmap/Roadmap.jsx` (Main Roadmap View)
Ye sabse important component hai jo skills ka tree/graph dikhata hai.

**Kaise kaam karta hai:**
1.  **`useParams()`**: URL se ID nikalta hai (e.g., agar URL `.../roadmap/react` hai, to id = "react").
2.  **`getRoadmapData(id)`**: Ye function `roadmapRegistry` se us ID ka sara data lata hai.
3.  **Check Data**:
    *   Agar data nahi mila? -> "Roadmap not found" dikhao.
    *   Agar mil gaya? -> Loop (`map`) chalao aur har step ke liye `<RoadmapNode />` dikhao.

---

### F. `src/Components/Roadmap/RoadmapNode.jsx` (Single Step)
Roadmap ka ek dabba (box) ya step.

**Features:**
- **`useState(isOpen)`**: Yaad rakhta hai ki ye box khula hai ya band.
- **`toggleOpen`**: Click karne par box ko kholta/band karta hai.
- **Render**:
    - **Header**: Title aur Arrow icon.
    - **Content**: Agar `isOpen` true hai, to description, topics, aur links dikhata hai.
    - **RoadmapLine**: Agar ye last step nahi hai, to neeche connect karne wali line dikhata hai.

---

### G. `src/data/roadmapRegistry.js` (The Brain/Database)
Yahan saara data stored hai.

1.  **Imports**: Alag-alag files se specific roadmaps import kiye (frontend, backend, etc.).
2.  **`definedRoadmaps`**: Ek bada object (dictionary) jo ID ko Data se map karta hai.
    *   `'react': reactRoadmap`
    *   `'python': pythonRoadmap`
3.  **`getRoadmapData(id)`**: 
    *   Agar requested ID is list me hai, to wahi return karo.
    *   Agar nahi hai, to `generateGenericRoadmap(id)` call karo jo ek dummy roadmap bana deta hai (taaki app crash na ho, bas generic steps dikhaye).

---

### H. `src/Pages/OfficialRoadmaps/OfficialRoadmaps.jsx`
Ye page saare available roadmaps ki list dikhata hai, categories mein divide karke.

- **Data**: Iska data `OfficialRoadmapsData.js` me alag rakha hai taaki code saaf rahe.
- **Sidebar**: Left side me categories (Web Dev, DevOps etc.). Click karne par `scrollToSection` us section tak scroll karta hai.
- **Grid**: Right side me cards hain jo link (`Link to=...`) hain specific roadmaps ke liye.

---

### CSS Files (Styles)
- **`index.css`**: Global styles aur variables (colors: `--primary-blue`, `--bg-primary`). Variables use karne se puri site ka color change karna aasan hota hai.
- **`App.css` / Component CSS**: Specific styles components ke liye. Humne inline styles hata kar classes use ki hain taaki code clean dikhe.

---

### Summary (Saar)
1.  **User Aata hai** -> `main.jsx` -> `App.jsx` -> `Home.jsx`.
2.  **User "Start" click karta hai** -> `SkillInput.jsx`.
3.  **User Form bharta hai** -> Logic run hota hai -> `Roadmap.jsx` pe redirect.
4.  **Roadmap Page** -> `roadmapRegistry.js` se data mangta hai -> `RoadmapNode` components bana kar screen par dikhata hai.

Ye flow hai aapke project ka! Simple aur Organized.
