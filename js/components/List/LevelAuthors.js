export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        verifier: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true
        }
    },
    template: `
        <div class="level-authors">
            <template>
                <div class="type-title-sm">Publisher</div>
                <p class="type-body">
                    <span>{{ author }}</span>
                </p>
                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
                <div class="type-title-sm">Country</div>
                <p class="type-body">
                    <span>{{ country }}</span>
                </p>
            </template>
        </div>
    `,

    computed: {
        selfVerified() {
            return this.author === this.verifier && this.creators.length === 0;
        },
    },
};
