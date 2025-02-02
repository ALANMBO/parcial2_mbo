import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 250 })
  titulo: string;

  @Column('varchar', { length: 5000 })
  sinopsis: string;

  @Column('varchar', { length: 100 })
  director: string;

  @Column('varchar', { length: 100 })
  tipoClasificacion: string;

  @Column('int')
  temporadas: number;

  @CreateDateColumn({ name: 'fecha_estreno' })
  fechaEstreno: Date;
}
