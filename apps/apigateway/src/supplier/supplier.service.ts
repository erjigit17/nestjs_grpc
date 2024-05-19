import {
  SupplierServiceClient,
  SUPPLIER_SERVICE_NAME,
} from '@app/common/types/supplier';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { SUPPLIER_SERVICE } from '../users/constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class SupplierService implements OnModuleInit {
  private supplierService: SupplierServiceClient;

  constructor(@Inject(SUPPLIER_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.supplierService = this.client.getService<SupplierServiceClient>(
      SUPPLIER_SERVICE_NAME,
    );
  }

  findAll() {
    return this.supplierService.findAllSuppliers({});
  }
}
