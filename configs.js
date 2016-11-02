var configs = {
    general : {
        secure : false,
        url : "hbjs.org",
        public_dir : "public",
        lang : "ru"
    },
    server : {
        port : 3003
    },
    auth : {
        google : {
            key : "164622835457-42dc6s86ipqv9u1os0ugklq9taqvdq6o.apps.googleusercontent.com",
            secret : "GLOnX0ZhYN3UW7HGU7OuNA09",
            callback : "http://hbjs.org:3003/auth/google/callback"
        },
        facebook : {
            clientID : "1584946591810033",
            secret : "a8d44a8b9501e240bab77692b58c9760",
            callback : "http://hbjs.org:3003/auth/facebook/callback"
        },
        twitter : {
            consumerKey : "jiEGM2hHjo6o7gzYUNmRWYoPV",
            secret : "wDjbKQWmgST7Ik8tJ6hiLuQomvd8ND80MCMFwQITDtgAsc3Ue0",
            callback : "http://hbjs.org:3003/auth/twitter/callback"
        }
    },
    db : {
        host : "localhost",
        port : "3306",
        database : "hbjs",
        user : "hbjs",
        password : "HBjs123456"
    }
};

module.exports = configs;