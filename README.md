# Local Shop Finder

This is a React Native mobile application designed to connect users with local shops in their immediate vicinity. The app demonstrates a complete development cycle, from user authentication to real-time data fetching from external APIs based on the user's geographical location.

## Key Features

* **User Authentication:** Secure login and logout functionality to manage user sessions.
* **Persistent Sessions:** Uses `AsyncStorage` to keep users logged in across app launches.
* **Location-Aware Functionality:**
   * Requests user permission to access device location using `expo-location`.
   * Handles cases where permission is denied and provides a way for the user to retry.
* **Nearby Shop Discovery:**
   * Fetches the user's current GPS coordinates.
   * Utilizes the **Google Places API** to find real stores within a 300-meter radius.
   * Conditionally renders a list of nearby shops or a message indicating that no shops are available in the area.

## Technology Stack

* **Framework:** React Native
* **Platform:** Expo (Development Build)
* **Routing:** Expo Router
* **Location Services:** `expo-location`
* **Local Storage:** `@react-native-async-storage/async-storage`
* **External APIs:** Google Places API (for Nearby Search)
* **Styling:** React Native StyleSheet

---

### A Note on Location & Emulators

This application was developed and tested using an Android/iOS emulator. By default, emulators often simulate a location in **Mountain View, California, USA**.

When you run the app, it will fetch the user's location, which will be reported as this default California location. Consequently, the app will display shops that are nearby that specific location (e.g., the Googleplex campus store). This demonstrates that the API integration and location fetching are working correctly.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn
* An Android or iOS emulator, or a physical device with the Expo Go app.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/anubhavshavaran/fydo-assignment.git](https://github.com/anubhavshavaran/fydo-assignment.git)
    cd fydo-assignment
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

3.  **Run the application:**
    This project uses an **Expo Development Build**, which creates a custom native app for development.

    For Android:
    ```sh
    npx expo run:android
    ```
    For iOS:
    ```sh
    npx expo run:ios
    ```
    The first time you run this, it will build and install the app on your emulator or device. Subsequent launches will be much faster.
