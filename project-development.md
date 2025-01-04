# Autobot Preact Migration Plan

## Core Features to Implement

### 1. Chat Interface

- Floating chat bubble that can be opened/closed
- Message thread display
- Input field for user messages
- Support for both text messages and option buttons
- Dark/Light mode support
- Responsive design for mobile/desktop

### 2. Chat Flow Management

- Tree-based conversation flow system, future improvements may include the ability to fetch a JSON file from the server to define the conversation flow
- Support for different conversation paths:
  - New Cars
  - Used Cars
  - Finance
  - Service
  - Sell My Car
  - Parts
  - General Enquiries
  - Car Specific Enquiries

### 3. Data Collection & Validation

- Form field validation for:
  - Name
  - Email
  - Phone
  - Date of Birth
  - Driver's License
  - Currency amounts
- Lead object construction
- Dynamic field collection based on conversation path

### 4. API Integration

- Website configuration fetching
- Lead submission
- Service booking availability
- Appointment time slots
- Vehicle make/model data

### 5. Analytics & Tracking

Events to track:

- Chat opened
- Chat closed
- Chat reset
- Message sent
- Option selected
- Chat loaded
- Lead submitted
- Facebook pixel integration
- Google Analytics integration

### 6. Plugins System

Current plugins to support:

- Locations selector
- Make/Model selector
- Date picker
- Time selector
- Checkout link
- Appointment bookings

## Technical Requirements

### 1. State Management - Zustand

- Chat state (open/closed)
- Message history
- Current conversation path
- Form data collection
- Loading states
- Error states

### 3. TypeScript Interfaces

- Website configuration
- Chat tree types
- Message types
- Plugin props
- Lead object structure
- API response types

### 4. Styling System

- CSS variables for theming
- Responsive design breakpoints
- Animation system
- Accessibility considerations

## Future Considerations

### 1. Enhanced Features

- Message persistence
- Offline support
- Multi-language support
- Rich media messages
- Voice input
- Typing indicators

### 2. Performance Optimizations

- Need to keep bundle as small as possible
- Code splitting for plugins
- Message virtualization
- Asset optimization
- Caching strategies

### 3. Testing Strategy

- Unit tests for components using Vitest
- Integration tests for chat flows
- E2E tests using Playwright
- Accessibility testing

### 4. Development Experience

## Migration Strategy

All API calls and data will be mocked for the initial release.
use lowercase folder names and use kabab-case for file names

1. Set up base Preact project with TypeScript ✓
2. Implement core state management
3. Build basic chat interface
4. Migrate chat tree logic
5. Implement plugin system
6. Add validation system
7. Integrate APIs
8. Add analytics
9. Migrate existing tests
10. Documentation

Proposed Architecture

1. Component-Driven Design:
   Break down the chatbot into reusable Preact components. Each component should handle a specific part of the UI, such as the chat bubble, message list, input field, and option buttons.
   Use Tailwind CSS for styling to keep the CSS footprint minimal and leverage utility classes for responsive design.
2. State Management with Zustand:
   Use Zustand to manage the global state of the chatbot. This includes the chat state (open/closed), current conversation path, message history, and user input data.
   Zustand's lightweight nature will help keep the bundle size small.
3. Data-Driven Conversation Flow:
   Instead of a hardcoded tree structure, use a JSON configuration file to define the conversation flow. This file can be fetched from a server, allowing for dynamic customization based on client needs.
   The JSON file can specify the order of questions, validation rules, and any conditional logic needed for the conversation.
4. Dynamic Component Rendering:
   Use a central component to render different parts of the conversation based on the current state. This component can decide which question or plugin to display next based on the JSON configuration and user input.
   This approach allows for easy updates and changes to the conversation flow without modifying the core codebase.
5. Lazy Loading and Code Splitting:
   Implement lazy loading for components that are not immediately needed, such as specific plugins or advanced features. This will help reduce the initial load time and keep the bundle size small.
   Use Vite's built-in support for code splitting to ensure that only the necessary code is loaded at any given time.
6. API Integration:
   Use a service layer to handle API requests for fetching configuration data, submitting leads, and any other backend interactions.
   This layer can also handle caching strategies to minimize network requests and improve performance.
