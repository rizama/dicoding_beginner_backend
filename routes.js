const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const response = h.response({
                message: "Homepage"
            });
            response.code(200)
            response.type('application/json');
            response.header('X-Custom', 'some-value');
            return response;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            console.log(h);
            const { username = 'Anonimous' } = request.params;
            const { lang } = request.query;
            if (lang == "id") {
                return `Hai, ${username}!`;
            }
            return `Hello, ${username}!`;
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    }
];

module.exports = routes;