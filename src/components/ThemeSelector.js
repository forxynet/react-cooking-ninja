import { useTheme } from "../hooks/useTheme"


// styles
import './ThemeSelector.css'

const themeColors = ['#7b6b4f', '#50BFE6', '#698b47', '#1B1B1B', '#428b64', '#8fc693', '#FFD662', '#939597', '#FE840E']

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
          src='dark_mode.png'
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