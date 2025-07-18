/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FF5733'; // Energetic Coral
const tintColorDark = '#FF8C66';   // Softer coral for dark mode

export const Colors = {
  light: {
    text: '#2F2F2F',           // Deep Charcoal
    background: '#FCFCFC',     // Very soft white
    tint: tintColorLight,
    icon: '#7A7A7A',           // Medium Gray
    tabIconDefault: '#7A7A7A',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#EAEAEA',           // Light Gray
    background: '#242424',     // Near Black
    tint: tintColorDark,
    icon: '#A3A3A3',           // Lighter Gray
    tabIconDefault: '#A3A3A3',
    tabIconSelected: tintColorDark,
  },
};