class CreateUserDto {
    constructor(body, role) {
        this.email = body.email;
        this.id = body.id;
        this.password = body.password;
        this.role = role;
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.email = null;
                this.id = null;
                this.password = null;
                this.role = null;
            }

            setEmail(email) {
                this.email = email;
                return this;
            }

            setId(id) {
                this.id = id;
                return this;
            }

            setPassword(password) {
                this.password = password;
                return this;
            }

            setRole(role) {
                this.role = role;
                return this;
            }

            build() {
                return new CreateUserDto(this);
            }
        }
        return new Builder;
    }
}

class LoginUserDto {
    constructor(body) {
        this.id = body.id;
        this.password = body.password;
    }
}

module.exports = { CreateUserDto, LoginUserDto };