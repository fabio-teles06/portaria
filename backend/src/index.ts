import app from "@/app";

const PORT = Number(process.env.PORT) || 4000;
app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server is running at ${address}`);
})