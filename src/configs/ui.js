import ui from '@nuxt/ui/vite'
import uiColor from './ui/color'
import uiButton from './ui/button'
import uiInput from './ui/input'

const config = {
    ui: {
      colors: uiColor,
      button: uiButton,
      input: uiInput
    }
}

export default () => ui(config)