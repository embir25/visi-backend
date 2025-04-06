import { IsString, IsDecimal, IsInt, IsEnum, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsEnum({ inStock: 'inStock', outOfStock: 'outOfStock' })
  status: 'inStock' | 'outOfStock';

  @IsInt()
  quantityAvailable: number;

  @IsOptional()
  @IsString()
  image?: string; // now works as optional and avoids the error
}
