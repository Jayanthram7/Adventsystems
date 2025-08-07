# TallyPrime Assistant

## Overview

TallyPrime Assistant is a full-stack AI-powered chat application designed to provide business support for TallyPrime accounting software. The application features a modern React frontend with a clean, professional interface that mimics TallyPrime's branding, and an Express.js backend that integrates with Google's Gemini AI to provide intelligent responses about accounting, inventory management, GST compliance, and business insights.

The system is built as a conversational AI assistant specifically tailored for TallyPrime users, offering contextual help with voucher entries, financial reporting, inventory optimization, and compliance guidance through a chat-based interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight, hook-based routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: Custom component library built on Radix UI primitives with Tailwind CSS
- **Design System**: Shadcn/ui components with TallyPrime-inspired color scheme and branding
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for robust API development
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Session Management**: In-memory storage with extensible interface for future database integration
- **API Design**: RESTful endpoints with comprehensive error handling and request validation
- **Development Integration**: Hot reload support with Vite middleware in development mode

### Chat System Design
- **AI Integration**: Google Gemini 2.5 Flash model with specialized system prompts for TallyPrime expertise
- **Message Management**: Session-based chat history with unique session identifiers
- **Real-time Interface**: Optimistic updates with loading states and error recovery
- **Context Awareness**: AI trained specifically on TallyPrime features, accounting principles, and business workflows

### UI/UX Architecture
- **Component Strategy**: Modular component architecture with reusable UI primitives
- **Responsive Design**: Mobile-first approach with adaptive layouts using Tailwind CSS
- **Accessibility**: Built on Radix UI for ARIA compliance and keyboard navigation
- **Theme System**: CSS custom properties for consistent color management and dark mode support
- **Typography**: Inter font family for professional, readable interface

### Data Management
- **Schema Design**: Drizzle schema with users and chat messages tables, prepared for PostgreSQL
- **Type Safety**: End-to-end TypeScript with shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type checking and API request validation
- **Storage Strategy**: Memory storage implementation with database-ready interface for easy migration

## External Dependencies

### AI Services
- **Google Gemini AI**: Primary AI service using @google/genai SDK for natural language processing
- **Model Configuration**: Gemini 2.5 Flash with customized temperature, topK, and topP settings for consistent, helpful responses

### Database Infrastructure
- **Neon Database**: PostgreSQL hosting service via @neondatabase/serverless for production-ready database connectivity
- **Drizzle Kit**: Database migration and schema management tools for PostgreSQL operations

### UI Component Libraries
- **Radix UI**: Complete suite of accessible, unstyled UI primitives including dialog, dropdown, form controls, and navigation components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Consistent icon library with TallyPrime-appropriate business and accounting icons

### Development Tools
- **Vite**: Modern build tool with TypeScript support, hot module replacement, and optimized production builds
- **ESBuild**: Fast bundling for server-side code compilation
- **PostCSS**: CSS processing with Tailwind CSS integration and autoprefixer

### Form and State Management
- **React Hook Form**: Performant form handling with @hookform/resolvers for validation integration
- **TanStack Query**: Server state management with caching, background updates, and optimistic updates
- **Zod**: Schema validation for type-safe form handling and API data validation

### Utility Libraries
- **date-fns**: Date manipulation and formatting for chat timestamps and business date calculations
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Conditional className composition utility