import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;
}
