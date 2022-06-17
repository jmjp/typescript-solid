class User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public createdAt: Date,
        public updatedAt: Date
    ) { }

    public static create(name: string, email: string, password: string): User {
        return new User(0, name, email, password, new Date(), new Date());
    }
    
}

export { User };