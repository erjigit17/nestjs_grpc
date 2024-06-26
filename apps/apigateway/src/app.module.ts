import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [UsersModule, SupplierModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
