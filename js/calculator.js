class Student {
  constructor(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.marks = [];
    this.attendance = new Array(25);
  }

  getStudentsAge() {
    return 2023 - this.yearOfBirth;
  }

  getAverageScore() {
    const sum = this.marks.reduce(function (acc, mark) {
      return (acc += mark);
    }, 0);
    return sum / this.marks.length;
  }

  getAverageAttendance() {
    let attendClass = 0,
      lessonNum = 0;
    this.attendance.forEach((elem) => {
      if (elem === true) {
        attendClass++;
      }
      if (elem === true || elem === false) {
        lessonNum++;
      }
    });
    return attendClass / lessonNum;
  }

  present() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = true;
        break;
      }
    }
  }

  absent() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = false;
        break;
      }
    }
  }

  summary() {
    const averageScore = this.getAverageScore();
    const attendance = this.getAverageAttendance();
    if (averageScore > 90 && attendance > 0.9) {
      return "Молодець!";
    } else if (averageScore > 90 || attendance > 0.9) {
      return "Добре, але можна краще!";
    } else if (averageScore < 90 && attendance < 0.9) {
      return "Редиска!";
    }
  }

  showStudentsInfo() {
    console.log(`
       Name: ${this.name} ${this.surname} 
       Age: ${this.getStudentsAge()}
       Average grade: ${this.getAverageScore()}
       Attendance: ${this.getAverageAttendance()}
       Summery: ${this.summary()}`);
  }
}

const student1 = new Student("Jane", "Johnson", 2005);
student1.marks = [90, 96, 100, 88, 92];
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1);
student1.showStudentsInfo();

const student2 = new Student("Max", "Smith", 2004);
student2.marks = [88, 85, 95, 95];
student2.present();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
console.log(student2);
student2.showStudentsInfo();

const student3 = new Student("Paul", "Kempbel", 2003);
student3.marks = [50, 75, 60];
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.absent();
console.log(student3);
student3.showStudentsInfo();