import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SUPPLIER_SERVICE } from '../users/constants';
import { SUPPLIER_PACKAGE_NAME } from '@app/common/types/supplier';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SUPPLIER_SERVICE,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5002',
          package: SUPPLIER_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../../proto/supplier.proto'),
        },
      },
    ]),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
