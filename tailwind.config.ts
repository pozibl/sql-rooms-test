import { sqlroomsTailwindPreset } from '@sqlrooms/ui'
import type { Config } from 'tailwindcss'

const preset = sqlroomsTailwindPreset({ prefix: '' })
const config = {
  ...preset,
  content: [
    // Your content paths...
    './src/**/*.{ts,tsx}',
    // Add SQLRooms packages to content paths
    './node_modules/@sqlrooms/**/dist/**/*.js'
  ],
  theme: {
    ...preset.theme,
    extend: {
      ...preset.theme?.extend
      // Add your custom theme extensions
    }
  }
} satisfies Config

export default config
