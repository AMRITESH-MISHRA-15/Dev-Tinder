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
  POST /request/review/:status/:requestId

## userRouter
  GET /user/requests/received
  GET /user/connections
  GET /user/feed  - gets you the profile of the other users on the platform
  

STATUS : ignored, interested, accepted, rejected