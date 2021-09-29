import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/app/NotFound'
import Main from '@/app/main/AppMain'
import Delivery from '@/app/delivery/Delivery'
import MainWrapper from '@/components/MainWrapper'
import Contacts from '@/app/contacts/Contacts'
import Stocks from '@/app/stocks/Stocks'
import SuccessfulOrder from '@/app/successfulOrder/SuccessfulOrder'
import Product from '@/app/product/Product'
import store from "@/config/store";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'main-wrapper',
            component: MainWrapper,
            children: [{
                path: '/',
                name: 'main',
                component: Main
            }, {
                path: '/delivery',
                name: 'delivery',
                component: Delivery
            }, {
                path: '/contacts',
                name: 'contacts',
                component: Contacts
            }, {
                path: '/stocks',
                name: 'stocks',
                component: Stocks
            }, {
                path: '/not-found',
                name: 'not-found',
                component: NotFound
            }, {
                path: '/successful-order',
                name: 'successful-order',
                component: SuccessfulOrder
            }, {
                path: '/:productId',
                name: 'product',
                component: Product
            }]
        }
    ]
})

export default router

router.beforeEach(async (to, from, next) => {
    if (from.name === 'product' && from.params.productId && to.name === 'main') {
        await next()
        const product = store.state.products.list.find(item => item._id === from.params.productId)
        await router.push({
            query: { scrollTo: from.params.productId, categoryId: product.categoryId }
        })
        return
    } else {
        next()
    }
    if (to.name === 'main' && from.name !== null && from.name !== 'main') scroll(0, 0)
});
