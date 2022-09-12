import {helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const taskValidator = (form) => {
    const rules = {
        task: {
            required: helpers.withMessage("Task is required", required),
        },
        status: {
            required: helpers.withMessage("Status is required", required),
        }
    }
    const v$ = useVuelidate(rules, form)
    return {v$}
}

export default taskValidator;







