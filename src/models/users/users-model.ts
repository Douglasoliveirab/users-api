export interface User {
    id?: number;
    first_name: string;
    last_name?: string;
    email: string;
    telefone: string;
    role: string;
    password: string
    cpf?: string;
    is_active: boolean;
    created_at: Date;
  }
  