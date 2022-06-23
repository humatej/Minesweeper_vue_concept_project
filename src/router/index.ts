import{createRouter,createWebHistory} from "vue-router"
import AboutPage from "../views/AboutPage.vue"
import BodyMain from "../views/BodyMain.vue"

const routes = [
    {
        path: '/',
        component: BodyMain,
    },
    {
        path: '/about',
        component: AboutPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router