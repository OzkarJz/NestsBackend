import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class ClientService {

    private clients = [
        {
            id: 1,
            nombre: 'cliente 1',
            direccion: 'direccion 1'
        },
        {
            id: 2,
            nombre: 'cliente 2',
            direccion: 'direccion 2'
        }
    ]
    
    findAll(): { id: number; nombre: string; direccion: string; }[] {
        return this.clients;
    }

    findById(id: number){


        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }
        
        return client;
    }

    updateClient(clientBody, id){
        //validaciones del cliente

        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }
        //logica para actualizar el cliente

        return {status: 'cliente actualizado'}
    }

    deleteClient(id){
 
        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }
        //logica para eliminar

        return {status: 'cliente eliminado'}
    }

    createClient(clientBody){
        //validaciones del cliente

        const client = this.clients.find( c => c.id === clientBody.id);

        if (!client){
            throw new NotFoundException(`Client with id ${clientBody.id} exist`);
        }
        //logica para crear el cliente

        return {status: 'cliente creado'}
    }
}
