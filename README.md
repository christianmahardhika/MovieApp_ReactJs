# Movie App with NEXT (REACT TYPESCRIPT)

The idea of this repo is to bring DDD into frontend.

# Project Structure
 ```
 /components
 /pages
  /movie
    /useCase
    MovieUseCase.ts
  index.ts
 index.tsx 
 /public
 /store
  /movie (Domain)
    /repository
      movieRepository.ts
      movieRepositoryInterface.ts
    /model
      response.ts
 /styles
 ```

 ## The way to handle the logic is separate into sections:
#### Domain
Domain is contain logic and APIs from one backend service. It is contain all API endpoints of the service
 #### Repository
 Repository is to handle CRUD (GET, POST, PATCH, DELETE) function into Backend APIs
 #### Model
 Model contain all interface and type of all endpoints response and request body
 #### useCase
 Usecase is to handle the logic part of the app. In this section, the state will be store and we can use any state management of react (ex. React Hook, Redux, etc) without populate the domain part.