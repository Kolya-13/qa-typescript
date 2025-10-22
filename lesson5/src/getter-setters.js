
const employee = {
    personal: {
        firstName: "Микола",
        lastName: "Тестовий",
        age: 28
    },
    position: "QA Engineer",
    salary: 25000,


    get fullName() {
        return `${this.personal.firstName} ${this.personal.lastName}`;
    },


    set fullName(value) {
        const parts = value.split(" ");
        if (parts.length === 2) {
            this.personal.firstName = parts[0];
            this.personal.lastName = parts[1];
        } else {
            console.log(" Невірний формат імені. Використовуйте 'Ім'я Прізвище'.");
        }
    },


    getSummary() {
        return ` ${this.fullName}, посада: ${this.position}, вік: ${this.personal.age}, зарплата: ${this.salary}₴`;
    }
};


console.log(employee.getSummary());


employee.fullName = "Олександр Петренко";


console.log(employee.getSummary());