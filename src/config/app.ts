export default {
    name: process.env.APP_NAME || 'Bookstore',
    port: process.env.APP_PORT || 3001,
    secret: process.env.SECRET || 'secret123',
}