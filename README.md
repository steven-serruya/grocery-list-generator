# Grocery List Generator

## Overview

This application is an Express.js server that serves a web page for generating grocery lists. It uses the OpenAI API to generate a detailed grocery list based on user input for a recipe and the number of people.

## Prerequisites

- Node.js installed on your machine.
- An API key from OpenAI.
- Basic knowledge of JavaScript and Node.js.

## Setup

1. **Clone the Repository**

   - Clone this repository to your local machine or download the source code.

2. **Install Dependencies**

   - Navigate to the root directory of the project in your terminal and run:
     ```
     npm install
     ```
   - This will install all the necessary dependencies including Express.js and `node-fetch`.

3. **Set up Environment Variables**

   - Create a `.env` file in the root directory.
   - Add your OpenAI API key to this file:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```

4. **Running the Application**
   - In the root directory, run:
     ```
     node [your-server-file].js
     ```
   - Replace `[your-server-file].js` with the name of your main server file (if different).
   - Your server should start, and the application will be accessible on `http://localhost:8000` or another port if you've configured it differently.

## Usage

- Access the web interface by navigating to `http://localhost:8000` in your web browser.
- Enter a recipe and specify the number of people in the provided form.
- Click 'Generate Recipe' to receive a detailed grocery list based on your input.

## Features

- Simple and user-friendly web interface.
- Dynamic grocery list generation using the OpenAI API.
- Responsive design for various devices.

## Screeshots

![Empty form](<public/Screenshots/Screenshot 2023-11-25 at 10.30.42.png>)
![Example with boeuf bourguignon](<public/Screenshots/Screenshot 2023-11-25 at 10.31.26.png>)
![Grocery List for boeuf bourguignon](<public/Screenshots/Screenshot 2023-11-25 at 10.33.00.png>)

## Contributing

Contributions to improve this project are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch with your features or fixes.
3. Submit a pull request with a clear description of your changes.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any queries or suggestions, please feel free to contact [your-email/contact-information].
