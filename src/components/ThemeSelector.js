import { useTheme } from "../hooks/useTheme"

import contrast from '../asserts/contrast.svg'

// styles
import './ThemeSelector.css'

const themeColors = ['#50BFE6', '#428b64']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={contrast}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
          alt="dark/light toggle icon"
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}