### The goal is to create a profile viewer (think Tinder) in which you can easily swipe through profiles showing information and a picture.

- Key Features:

  - The user should be able to swipe to browse through cards.
  - Use the Random user API to fetch the data and images you need.
  - Api is here: https://randomuser.me/api/, docs here: https://randomuser.me/documentation
  - The solution must be written in JavaScript or TypeScript using React.

- What I want to do?
  - Create service provider with `axios`, make sure it's possible to do CRUD
  - Use Presentation/container pattern
    - Keep logic components decoupled from UI components
    - `styled-components`, did not feel like using external css
    - Use `react-swipe-card` for swipe effect of each random users
    - Use `react-loader-spinner` for spinner
    - DEMO: ![Peek_2021-12-09_00-08.gif](Peek_2021-12-09_00-08.gif)

## How to RUN:

1. Clone the repository
2. `npm i`
3. `npm start`
4. `loaclhost:3000`
