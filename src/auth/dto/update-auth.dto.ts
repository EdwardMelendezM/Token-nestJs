import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDpto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CreateUserDpto) {}
