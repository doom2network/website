import feathers from '@feathersjs/feathers';
import authClient from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client'

const client = feathers();

const backend = process.env.NODE_ENV === 'production' 
    ? 'https:/api.doom2.network' 
    : 'http://localhost:9000';

const restClient = rest(backend)

// Configure rest client to use fetch
client.configure(restClient.fetch(window.fetch))

// Configure auth client
client.configure(authClient())

const services = {
    users: client.service('users'),
    wads: client.service('wads')
};

export { client as default, services };