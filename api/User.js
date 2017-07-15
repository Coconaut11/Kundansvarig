module.exports = class {
    constructor(json) {
        this.id = json.id;
        this.name = json.name;

        this.age = json.age;
        this.date_birth = json.date_birth;

        this.adress = json.adress;
        this.telf = json.telf;

        this.diseases = json.diseases;
        this.medication = json.medication;

        this.notes = "";
    }
}
