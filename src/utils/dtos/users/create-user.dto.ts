import { IsString, IsOptional, IsEmail, IsBoolean } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsOptional()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;
}