export const users = [
    {
        id: 1,
        username: "Ali",
        img: 'ali',
        job: 'developer'
    },
    {
        id: 2,
        username: 'bedbext_developer',
        img: 'bedbext_developer',
        job: 'test2',
    },
    {
        id: 3,
        username: 'duman',
        img: 'duman',
        job: 'test3',
    },
    {
        id: 4,
        username: 'js_oyrenen_shexs',
        img: 'js_oyrenen_shexs',
        job: 'test4',
    },
    {
        id: 5,
        username: 'qarli_daglar',
        img: 'qarli_daglar',
        job: 'test5',
    },
    {
        id: 6,
        username: 'qoca_cinar',
        img: 'qoca_cinar',
        job: 'test6',
    },
    {
        id: 7,
        username: 'visselka',
        img: 'visselka',
        job: 'test7',
    },
    {
        id: 8,
        username: 'novxani',
        img: 'novxani',
        job: 'test8',
    },
]



export const getUsers = async () => {
    // return users;
    const newPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res(users)
        }, 1500);
        // setTimeout(() => {
        //     rej({ status: 401, message: 'Not authenticated!' })
        // }, 1200);
        // setTimeout(() => {
        //     rej({ status: 404, message: 'Not found!' })
        // }, 1000);
        // setTimeout(() => {
        //     rej({ status: 503, message: 'server is not available!' })
        // }, 1000);
    })
    return newPromise;
}
