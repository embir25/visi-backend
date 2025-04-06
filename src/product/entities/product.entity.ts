import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'enum', enum: ['inStock', 'outOfStock'], default: 'inStock' })
  status: 'inStock' | 'outOfStock';

  @Column()
  quantityAvailable: number;

  @Column()
  image?: string;

  @CreateDateColumn()
  createdAt: Date;
}
