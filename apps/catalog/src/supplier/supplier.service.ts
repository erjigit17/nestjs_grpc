import { Supplier } from '@app/common/types/supplier';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class SupplierService implements OnModuleInit {
  private readonly suppliers: Supplier[] = [];

  onModuleInit() {
    for (let i = 0; i <= 100; i++) {
      this.createSupplier({
        id: randomUUID(),
        name: randomUUID(),
        surname: randomUUID(),
      });
    }
  }

  createSupplier(createSupplierDto: Supplier) {
    const supplier: Supplier = {
      ...createSupplierDto,
    };
    this.suppliers.push(supplier);

    return supplier;
  }

  findAllSuppliers() {
    return { suppliers: this.suppliers };
  }
}
