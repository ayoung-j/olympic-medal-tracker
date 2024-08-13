export const validateCountryForm = (form) => {
    if (form.name === "") {
        return {
            isValid: false,
            message: "국가명을 입력해주세요.",
        };
    }

    if (form.goldMedal < 0 || form.goldMedal === "") {
        return {
            isValid: false,
            message: "금메달 수를 확인해주세요.",
        };
    }
    if (form.silverMedal < 0 || form.silverMedal === "") {
        return {
            isValid: false,
            message: "은메달 수를 확인해주세요.",
        };
    }
    if (form.bronzeMedal < 0 || form.bronzeMedal === "") {
        return {
            isValid: false,
            message: "동메달 수를 확인해주세요.",
        };
    }

    return {
        isValid: true,
    };
};
