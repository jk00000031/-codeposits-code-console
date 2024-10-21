'use strict'

import type { GlobalThemeOverrides } from 'naive-ui'
import { colord } from 'colord'
import { set } from 'lodash-es'

const defaultTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#3f3f46',
    primaryColorHover: '#71717a',
    primaryColorPressed: '#27272a',
    primaryColorSuppl: '#71717a',
    borderRadius: '4px',
  },
  Menu: {
    itemHeight: '36px',
  },
  Tooltip: {
    color: 'white',
    textColor: 'black',
    boxShadow: '0 3px 6px -4px rgba(0, 0, 0, .12), 0 0px 8px 0 rgba(0, 0, 0, .08), 0 5px 16px 4px rgba(0, 0, 0, .05)',
  },
}
const localStorageKey = import.meta.env.VITE_META_PROJECT_NAME + '_appThemeColor'

function getLoadingBar(theme?: GlobalThemeOverrides) {
  return createDiscreteApi(['loadingBar'], {
    configProviderProps: {
      themeOverrides: theme || defaultTheme,
    },
  })
}

let { loadingBar } = getLoadingBar()

// const theme: GlobalThemeOverrides = toRaw(defaultTheme);
const theme = ref<GlobalThemeOverrides | ObjectAny>()
theme.value = defaultTheme

const swatches: string[] = [
  '#65a30d',
  '#16a34a',
  '#0d9488',
  '#0284c7',
  '#2563eb',
  '#4f46e5',
  '#c026d3',
  '#9333ea',
  '#4b5563',
  '#475569',
  '#ea580c',
  '#dc2626',
  '#db2777',
]

function getStorageCache() {
  const cacheColor = localStorage.getItem(localStorageKey)
  if (cacheColor) {
    setThemeColor(cacheColor)
  }
}

getStorageCache()

function setStorageCache(color: string) {
  localStorage.setItem(localStorageKey, color)
}

function setThemeColor(color: string) {
  const brightColor = colord(color).lighten(0.05).toHex()
  const darkenColor = colord(color).darken(0.05).toHex()
  set(theme.value as GlobalThemeOverrides, 'common.primaryColor', color)
  set(theme.value as GlobalThemeOverrides, 'common.primaryColorHover', brightColor)
  set(theme.value as GlobalThemeOverrides, 'common.primaryColorSuppl', brightColor)
  set(theme.value as GlobalThemeOverrides, 'common.primaryColorPressed', darkenColor)
  setStorageCache(color)
  ;({ loadingBar } = getLoadingBar(theme.value))
}

export { loadingBar, theme, swatches, setThemeColor }
