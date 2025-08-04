import Btn from '../components/Btn.js';

export default {
    components: {
        Btn
    },
    props: {
        show: Boolean,
        countries: Array,
        selectedCountries: Array,
    },
    template: `
        <div v-if="show" class="dialog-overlay">
            <div class="dialog">
                <h3>Filter by Country</h3>
                <ul>
                    <li v-for="country in countries">
                        <input type="checkbox" :value="country" :checked="selectedCountries.includes(country)" @change="toggleCountry(country)" />
                        <p>{{ country }}</p>
                    </li>
                </ul>
                <Btn @click="$emit('close')">Close</Btn>
            </div>
        </div>
    `,
    methods: {
        toggleCountry(country) {
            const updatedCountries = [...this.selectedCountries];
            const index = updatedCountries.indexOf(country);
            if (index > -1) {
                updatedCountries.splice(index, 1);
            } else {
                updatedCountries.push(country);
            }
            this.$emit('update:selectedCountries', updatedCountries);
        },
    },
};
