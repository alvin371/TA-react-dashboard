export const validationSalesman = (values) => {
    let errors = {};
    if (!values.branch_code) {
        errors.branch_code = "Please fill out this field"
    }

    if (/!^(?! |.* {2})[a-zA-Z ]{0,40}$/g.test(values.sales_name)) {
        errors.sales_name = "Salesman Name must be Alphabet and  can't have white space"
    }
    if (values.sales_name.length > 40) {
        errors.sales_name = "Salesman Name maximum character is 40"
    }

    if (!values.sales_code_npk) {
        errors.sales_code_npk = "Please fill out this field"
    }
    if (/!^[a-zA-Z0-9]{0,10}$/.test(values.sales_code_npk)) {
        errors.sales_code_npk = "Salesman Code must be Alphabet and Number"
    }
    if (values.sales_code_npk.length > 10) {
        errors.sales_code_npk = "Salesman Code maximum character is 10"
    }

    return errors;
}
