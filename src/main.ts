import { createApp } from 'vue'
import App from './App.vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase'
import { getAnalytics } from 'firebase/analytics'

const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: []
})

const analytics = getAnalytics(firebaseApp)

app.mount('#app')
