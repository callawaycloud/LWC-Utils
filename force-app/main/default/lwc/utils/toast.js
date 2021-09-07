import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Toast extends LightningElement {
    getErrorMessage(error) {
        // console.error(error);

        let message = "Unknown error";
        if (Array.isArray(error.body)) {
            message = error.body.map((e) => e.message).join(", ");
        } else if (typeof error.body?.message === "string") {
            message = error.body.message;
        } else if (error.body?.pageErrors && Array.isArray(error.body.pageErrors) && error.body.pageErrors.length > 0) {
            message = error.body.pageErrors.map((e) => e.message).join(", ");
        } else if (error.body?.fieldErrors) {
            const fieldErrors = error.body.fieldErrors;
            message = Object.keys(fieldErrors)
                .map((key) => fieldErrors[key].map((e) => e.message).join(", "))
                .join(", ");
        }
        return message;
    }

    displayError(error) {
        this.displayToast("Error", this.getErrorMessage(error), "error");
    }

    displaySuccess(message) {
        this.displayToast("Success", message, "success");
    }

    displayToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }
}
