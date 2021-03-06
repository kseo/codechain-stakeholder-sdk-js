#!/usr/bin/env node

import * as yargs from "yargs";

import { module as beginRevokeModule } from "./cmds/beginRevoke";
import { module as delegateModule } from "./cmds/delegate";
import { module as showModule } from "./cmds/show";
import { module as transferModule } from "./cmds/transfer";

export interface GlobalParams {
    "keys-path": string;
    "rpc-server": string;
}

const _argv = yargs
    .scriptName("ccstake")
    .locale("LC_ALL")
    .option("keys-path", {
        describe: "The path to storing the keys",
        string: true,
        normalize: true,
        default: "./keystore.db"
    })
    .option("rpc-server", {
        describe: "The RPC server URL",
        string: true,
        default: "https://rpc.codechain.io/"
    })
    .command(showModule)
    .command(transferModule)
    .command(delegateModule)
    .command(beginRevokeModule)
    .demandCommand()
    .recommendCommands()
    .showHelpOnFail(true)
    .help()
    .strict().argv;
