# ben-and-steve-backend

## Development

### The following steps are required to run this project locally:

1. After cloning run the following commands in project root:

- `npm i`
- `touch .env.development`

2. set the following variables in `.env.development` (the combination of DB values is your URI string)

- PORT=3000
- DATABASE_TYPE=mongodb:
- DATABASE_NAME=//localhost: or //127.0.0.1:
- DATABASE_USER=27017
- DATABASE_PASSWORD=/habitude

3. Start the App `npm run dev`

## Production

1. Production follows the same pattern as development but with your actual secret values
2. Start the App `NODE_ENV=production npm start`
