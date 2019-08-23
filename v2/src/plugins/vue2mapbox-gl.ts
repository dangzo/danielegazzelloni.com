import { Vue } from 'nuxt-property-decorator';
import Vue2MapboxGL from 'vue2mapbox-gl';

// You might want to import the relevant css, for example:
import 'mapbox-gl/dist/mapbox-gl.css';
// for the v-mapbox-geocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// Use the plugin
Vue.use(Vue2MapboxGL);
