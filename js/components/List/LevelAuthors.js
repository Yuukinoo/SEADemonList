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
            <div class="type-title-sm">Publisher</div>
            <p class="type-body">
                <span>{{ author }}</span>
            </p>
            <div class="type-title-sm">First Victor</div>
            <p class="type-body">
                <span>{{ verifier }}</span>
            </p>
            <div class="type-title-sm">Country</div>
            <p class="type-body">
                <span>{{ country }}</span>
            </p>
        </div>
    `,
};
