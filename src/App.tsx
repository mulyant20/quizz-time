import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Setting as SettingInteface } from './interface/setting'
import { Category, Home, Quiz, Score, Setting } from './pages'

const App: React.FC = () => {
  let localSetting: SettingInteface = {
    duration: 10,
    theme: 'light',
    totalQuestion: 10
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route
          path='quiz/:category'
          element={<Quiz duration={localSetting.duration} totalQuestion={localSetting.totalQuestion}/>}
        />
        <Route path='score' element={<Score />} />
        <Route
          path='setting'
          element={
            <Setting
              duration={localSetting.duration}
              theme={localSetting.theme}
              totalQuestion={localSetting.totalQuestion}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
