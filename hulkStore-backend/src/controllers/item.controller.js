import express from 'express';
import * as services from './../services/item.service';

async function get (body) {
    if (body === {}) {
        return await services.listAll();
    } else {
        return await services.listOne(body);
    }
}

async function post (body) {
    return await services.create(body);
}

async function put (body) {
    return await services.updateOne(body);
}

async function remove (body) {
    await services.deleteItems(body);
}

async function sellItem (body) {
    return await services.sellItem(body);
}