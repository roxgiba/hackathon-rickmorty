This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Rick and Morty Character Search

## Overview
This React application enables users to search for characters from the popular animated series "Rick and Morty" using the Rick and Morty API. By entering a character's name in the search bar, the application fetches and displays a list of matching characters along with their details.

## Installation
1. Clone the repository:
 ```
git clone https://github.com/your-username/your-repository.git
 ```
2. Navigate to the project directory:
 ```
cd your-repository
 ```
3. Install dependencies:
 ```
npm install
 ```
4. Start the development server:
 ```
npm run dev
 ```
Access the application at http://localhost:3000.

## Usage
1. Open the application in your web browser.
1. Enter the character's name in the search bar.
1. View the results:
    - The application fetches and displays a list of characters matching the entered name.
    - Each character card includes an image, name, species, and origin.

## Dependencies
- React: JavaScript library for building user interfaces.
- Next.js: React framework for server-side rendered applications.
- _react_ and _react-dom_: Core React libraries.
- _next/image_: Component for optimizing and serving images.

## Code Structure
- The primary component is _Home_, housing the logic for fetching and displaying character data.
- State variables (_data, isLoading, searchQuery_) manage UI and data flow.
- The _useEffect_ hook triggers API requests upon _searchQuery_ changes.
- Loading messages appear during data fetch, followed by character cards upon data availability.

## API Integration
The application communicates with the Rick and Morty API to retrieve character information based on the user's search query.

```
fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
  .then((res) => res.json())
  .then((data) => {
    setData(data);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });
```
