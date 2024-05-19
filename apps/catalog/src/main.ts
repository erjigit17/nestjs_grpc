import { NestFactory } from '@nestjs/core';
import { CatalogModule } from './catalog.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';
import { SUPPLIER_PACKAGE_NAME } from '@app/common/types/supplier';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CatalogModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:5002',
        protoPath: join(__dirname, '../supplier.proto'),
        package: SUPPLIER_PACKAGE_NAME,
      },
    },
  );

  await app.listen();
  console.info('Catalog ms is starting');
}
bootstrap();
