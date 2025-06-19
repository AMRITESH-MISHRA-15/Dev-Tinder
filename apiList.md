# DevTinder APIs

## authRouter
  POST /signup
  POST /login
  POST /logout

## profileRouter
  GET /profile/view
  PATCH /profile/edit
  PATCH /profile/password
  POST /profile/forgot-password

## connectionRequestRouter
  POST /request/send/:status/:userId
  
  POST /request/review/accepted/:requestId
  POST /request/review/rejected/:requestId

## userRouter
  GET /user/connections
  GET /user/requests
  GET /user/feed  - gets you the profile of the other users on the platform
  

STATUS : ignored, interested, accepted, rejected