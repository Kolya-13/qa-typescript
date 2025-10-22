

const student = {
  name: "Микола",
  age: 21,
  isActive: true,
  subjects: ["Math", "QA Automation", "JavaScript", "Git"],
  contact: {
    email: "mykola@example.com",
    phone: "+380123456789"
  },
  showInfo: function () {
    console.log("👤 Ім'я:", this.name);
    console.log("🎂 Вік:", this.age);
    console.log("📧 Email:", this.contact.email);
    console.log("📚 Предмети:");
    this.subjects.forEach((subject, index) => {
      console.log(`  ${index + 1}. ${subject}`);
    });
  }
};


student.showInfo();