class User {
    
    private _email: string;
    private _nombres: string; 
    private _password: string

    constructor(
        email: string, nombres: string,
       
        password: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._password = password
    }

    // Getters
    get email(): string {
        return this._email;
    }

    get nombres(): string {
        return this._nombres;
    }

   

   
    get password(): string {
        return this._password;
    }

    // Setters
    set email(email: string) {
        this._email = email;
    }

    set nombres(nombres: string) {
        this._nombres = nombres;
    }


    set password(password: string) {
        this._password = password;
    }
}

export default User;