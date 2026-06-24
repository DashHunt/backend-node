# Backend Node Portfolio

A collection of backend applications built with Node.js and TypeScript, showcasing software architecture, API design, database modeling, caching strategies, automation, and modern backend development practices.

The goal of this repository is to serve as both a personal portfolio and a playground for experimenting with new technologies, architectural patterns, and AI-powered solutions.

### REPOSITORY STRUCTURE

This repository follows a **monorepo architecture**, where multiple Node.js/TypeScript backend applications are maintained in a single repository.

The goal is to centralize development standards, architectural patterns, reusable solutions, and project organization while keeping each application isolated and independently deployable.

backend-node/
│
├── url-shortener/           # URL shortening service with Redis cache
├── crm-api/                 # Customer Relationship Management API
├── training-api/            # Fitness and training management API
├── cercle-node-api/         # Node test
│
└── README.md               # Repository documentation

Each project is a self-contained application with its own:

- Business rules
- Database schema
- Environment configuration
- Dependencies
- Tests
- API documentation

Despite being independent applications, all projects follow the same engineering standards regarding:

- Clean Architecture principles
- Layered application design
- SOLID principles
- REST API conventions
- Error handling
- Input validation
- Testing strategies
- Documentation practices

This repository serves both as a personal portfolio and as a collection of production-oriented backend applications designed to demonstrate software engineering, system design, API development, caching strategies, and modern backend development practices.

### TECHNOLOGIES
- Node.js
- TypeScript
- Express
- Fastify
- Prisma
- PostgreSQL
- Redis

### PROJECT STRUCTURE

The structure below represents the standard architecture (Feature-based architecture) used across most Node.js/TypeScript projects in this repository.  
Depending on the project's complexity and requirements, some folders may be added, removed, or adapted.

my-node-ts-app/
├── prisma/                         # PRISMA handlers 
│   ├── lib/                        # PRISMA config
├── src/                            # Main source code directory
│   ├── @types/                     # Types for project
│   ├── shared/                     # Environment variables and DB credentials
│   │   ├── config/                     # Environment variables and DB credentials
│   │   ├── types/                      # Types for the project
│   │   ├── services/                   # Main core business logic and workflows
│   │   ├── middlewares/                # Custom global middleware (auth, error catch)
│   │   └── utils/                      # Helper functions and reusable utilities
│   ├── modules/                    # Modules/features
│       ├── users/                      # Routes, controllers, models and schemas for this feature
│       └── coaches/                    # Routes, controllers, models and schemas for this feature
├── tests/                          # Independent unit and integration tests
├── .env                            # Local private configurations
├── .example.env                    # Example local private configurations
├── .gitignore                      # Version control exclusion list
├── prisma.config.ts                # Prisma configuration file
├── package.json                    # NPM scripts and app dependency tracking
└── server.ts                       # Root entry point to boot up the server
├── tsconfig.json                   # TS config file
├── README.md                       # Project description with FR and NFR requirements for the project.

### AI & AUTOMATION

Some projects may include integrations with AI-powered services and automation workflows.

Examples:

- LLM integrations
- Agent-based architectures
- Recommendation engines
- Content generation
- Process automation

AI services are implemented as isolated modules to maintain loose coupling and provider flexibility.