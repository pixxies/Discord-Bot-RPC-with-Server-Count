const fetch = require('node-fetch');
const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

const dotenv = require('dotenv');
dotenv.config();

const rpcdata = require('./src/variables.json');
rpcdata.api_key = process.env.API_KEY


function refreshRPC(rpcdata) {

    fetch(`https://top.gg/api/bots/${rpcdata.bot_id}/stats`, {
            headers: { "Authorization": rpcdata.api_key }
        })
        .then(response => response.json())
        .then(data => {

            if (data && data.server_count) {
                let servercount = Number(data.server_count).toLocaleString();
                client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity: {
                        state: `${servercount} servers`,
                        details: rpcdata.description,
                        assets: rpcdata.assets,
                        buttons: rpcdata.buttons
                    }
                })

            } else {

                client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity: {
                        details: rpcdata.description,
                        assets: rpcdata.assets,
                        buttons: rpcdata.buttons
                    }
                })

            }

        });

}


client.on('ready', () => {

    refreshRPC(rpcdata)

    setInterval(() => {
        refreshRPC(rpcdata)
    }, 3600000);

})

client.login({ clientId: rpcdata.bot_id }).catch(console.error);


console.log("[START] Discord RPC with Server Count started!")