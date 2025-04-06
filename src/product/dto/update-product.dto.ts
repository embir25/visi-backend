import { IsString, IsDecimal, IsInt, IsEnum, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDecimal()
  @IsOptional()
  price?: number;

  @IsEnum({ inStock: 'inStock', outOfStock: 'outOfStock' })
  @IsOptional()
  status?: 'inStock' | 'outOfStock';

  @IsInt()
  @IsOptional()
  quantityAvailable?: number;

  @IsString()
  @IsOptional()
  image?: string;
}
