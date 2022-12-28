import React, { useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocalstorage } from './hooks/useLocalstorage'
import { Setting as SettingInteface } from './interface/setting'
import { Category, Home, Quiz, Score, Setting } from './pages'

let localSetting: SettingInteface = {
  duration: 10,
  theme: 'light',
  totalQuestion: 10
}

const App: React.FC = () => {
  const [setting, setSetting] = useLocalstorage('setting', localSetting)

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
