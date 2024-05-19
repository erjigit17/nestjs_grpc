import { Controller } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import {
  SupplierServiceController,
  SupplierServiceControllerMethods,
} from '@app/common/types/supplier';

@Controller()
@SupplierServiceControllerMethods()
export class SupplierController implements SupplierServiceController {
  constructor(private readonly supplierService: SupplierService) {}
  findAllSuppliers() {
    return this.supplierService.findAllSuppliers();
  }
}
