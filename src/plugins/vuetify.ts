import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#86d737',
                secondary: '#71c9ce',
                accent: '#86d737',
            },
        },
        options: {
            customProperties: true,
        },
    },
});
