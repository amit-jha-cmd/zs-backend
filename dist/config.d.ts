declare const config: {
    readonly env: "development";
    readonly dbConfig: {
        readonly host: "localhost";
        readonly port: 5431;
        readonly user: "ajha";
        readonly password: "Hello@123";
        readonly database: "ajha";
        readonly pool: {
            readonly min: 0;
            readonly max: 5;
        };
    };
    readonly log: {
        readonly format: "dev";
        readonly dir: "../logs";
    };
};
export default config;
