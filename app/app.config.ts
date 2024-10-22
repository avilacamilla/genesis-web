export default defineAppConfig({
  ui: {
    primary: 'accent',
    gray: 'zinc',
    variables: {
      light: {
        background: 'var(--color-gray-50)'
      },
      dark: {
        background: 'var(--color-gray-950)'
      }
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'white'
      }
    },
    input: {
      rounded: 'rounded-full'
    },
    header: {
      links: {
        base: 'py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity',
        active: 'text-white dark:text-white after:opacity-100',
        inactive: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
      }
    },
    footer: {
      top: {
        container: 'py-0 lg:py-16'
      },
      bottom: {}
    }
  }
})
