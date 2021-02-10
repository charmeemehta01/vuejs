import Singin from './components/Signin'
import Admin from './components/Admin/Admin'
import Mentor from './components/Admin/Mentors'
import Blogs from './components/Admin/Blogs'
import Add from './components/Admin/AddMentor'
import Sessions from './components/Admin/Sessions'
import Revoke from './components/Admin/Revoked'
export const routes = [{
        path: '/',
        redirect: '/signin',
        beforeEnter: (to, from, next) => {
            fetch("http://localhost:8000/isLoggedIn", {
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.code == 200)
                        next('/Admin');
                    else
                        next('/signin');
                })
                .catch(() => {
                    next('/signin');
                });

        }
    },
    {
        path: '/signin',
        component: Singin,
        beforeEnter: (to, from, next) => {
            fetch("http://localhost:8000/isLoggedIn", {
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.code == 200)
                        next('/Admin');
                    else {
                        next();
                    }
                })
                .catch(() => {
                    next();
                });
        }
    },
    {
        path: '/Admin',
        component: Admin,
        children: [{
                path: '/Admin',
                component: Mentor,
                beforeEnter: (to, from, next) => {
                    fetch("http://localhost:8000/isLoggedIn", {
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.code == 200)
                                next();
                            else {
                                next('/');
                            }
                        })
                        .catch(() => {
                            next('/');
                        });
                }
            },
            {
                path: '/Admin/Blogs',
                component: Blogs,
                beforeEnter: (to, from, next) => {
                    fetch("http://localhost:8000/isLoggedIn", {
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.code == 200)
                                next();
                            else {
                                next('/');
                            }
                        })
                        .catch(() => {
                            next('/');
                        });
                }
            },
            {
                path: '/Admin/Sessions',
                component: Sessions,
                beforeEnter: (to, from, next) => {
                    fetch("http://localhost:8000/isLoggedIn", {
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.code == 200)
                                next();
                            else {
                                next('/');
                            }
                        })
                        .catch(() => {
                            next('/');
                        });
                }
            },
            {
                path: '/Admin/AddMentor',
                component: Add,
                beforeEnter: (to, from, next) => {
                    fetch("http://localhost:8000/isLoggedIn", {
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.code == 200)
                                next();
                            else {
                                next('/');
                            }
                        })
                        .catch(() => {
                            next('/');
                        });
                }
            },
            {
                path: '/Admin/Revoke',
                component: Revoke,
                beforeEnter: (to, from, next) => {
                    fetch("http://localhost:8000/isLoggedIn", {
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.code == 200)
                                next();
                            else {
                                next('/');
                            }
                        })
                        .catch(() => {
                            next('/');
                        });
                }
            },
        ],
        beforeEnter: (to, from, next) => {
            fetch("http://localhost:8000/isLoggedIn", {
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.code == 200)
                        next();
                    else {
                        next('/');
                    }
                })
                .catch(() => {
                    next('/');
                });
        }
    },




    { path: '*', redirect: '/' }
];