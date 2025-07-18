import ClienteRepositorio from "@/pages/core/ClienteRepositorio";
import firebase from "../config";
import "firebase/compat/firestore";
import { SnapshotOptions } from "firebase/firestore";

export default class ColecaoCliente implements ClienteRepositorio {
    private clientes: { id?: string; nome?: string; idade?: number }[] = [];

    conversor: firebase.firestore.FirestoreDataConverter<{ id?: string; nome?: string; idade?: number }> = {
        toFirestore(cliente: { id?: string; nome?: string; idade?: number }) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            };
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: SnapshotOptions
        ) {
            const data = snapshot.data(options);
            return {
                id: snapshot.id,
                nome: data?.nome,
                idade: data?.idade,
            };
        }
    };

    async salvar(cliente: { id?: string; nome?: string; idade?: number }): Promise<void> {
        if (cliente.id) {
            await this.colecao().doc(cliente.id).set(cliente);
        } else {
            await this.colecao().add(cliente);
        }
    }

    async excluir(cliente: { id?: string; nome?: string; idade?: number }): Promise<void> {
        return this.colecao().doc(cliente.id).delete();
    }

    async obterTodos(): Promise<{ id?: string; nome?: string; idade?: number }[]> {
        const snapshot = await this.colecao().get();
        return snapshot.docs.map(doc => doc.data());
    }

    async obterPorId(id: string): Promise<{ id?: string; nome?: string; idade?: number } | null> {
        const cliente = this.clientes.find(c => c.id === id);
        return cliente || null;
    }

    async atualizar(cliente: { id?: string; nome?: string; idade?: number }): Promise<void> {
        await this.salvar(cliente);
    }

    private colecao() {
        return firebase.firestore().collection("clientes").withConverter(this.conversor);
    }
}