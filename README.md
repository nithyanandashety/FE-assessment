# FE-assessment - React & TypeScript

Application built with **React** and **TypeScript**. It allows users to view a list of articles and click on any article to see its full content.

## Features

- Displays a list of articles on the front page.
- Each article is clickable, leading to a page displaying its full content.
- Implements error handling for failed API requests.
- Styled with **Tailwind CSS**.

## Tech Stack

- **React** (JavaScript library for building user interfaces)
- **TypeScript** (Typed superset of JavaScript)
- **Tailwind CSS** (Utility-first CSS framework)
- **React Router** (For navigation between pages)
- **Axios** (For API requests)

## API Endpoints

The app fetches article data from the following API endpoints:

1. **List of articles**:  
   `GET https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles`

2. **Single article**:  
   `GET https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/{id}`

## Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository

### 2. Install dependencies
```bash
npm install
```

### 3. Start server
```bash
npm run dev
```

This will start the app at [http://localhost:5173](http://localhost:5173).

## Error Handling

The app includes basic error handling for:
- **API failures**: If the articles cannot be fetched, an error message is displayed.
- **Loading state**: While the article data is being fetched, a loading message is shown.
