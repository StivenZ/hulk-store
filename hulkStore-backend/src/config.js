const db_pass = process.env.DB_PASS;

const config = {
    appl: {
        port: 4000
    },
    db: {
        host: 'localhost',
        port: 5000,
        name: 'db',
        driver: "mongodb+srv://vlad:" + db_pass + "@cluster0.kwdkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
}

export default config;