export default interface ClienteRepositorio {
    salvar(cliente: { id?: string; nome?: string; idade?: number }): Promise<void>;
    excluir(cliente: { id?: string; nome?: string; idade?: number }): Promise<void>;
    obterTodos(): Promise<{ id?: string; nome?: string; idade?: number }[]>;
    obterPorId(id: string): Promise<{ id?: string; nome?: string; idade?: number } | null>;
    atualizar(cliente: { id?: string; nome?: string; idade?: number }): Promise<void>;
}
