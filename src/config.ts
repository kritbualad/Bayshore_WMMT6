import fs from 'fs';

export interface ConfigFile {
    shopName: string;
    shopNickname: string;
    regionName: string;
    serverIp?: string;
    gameOptions: GameOptions;
}

export interface GameOptions {
    // Amount of full-tunes to grant to newly registered cards
    grantFullTuneTicketToNewUsers: number;
}

export class Config {
    private static cfg: ConfigFile;

    static load() {
        console.log('Loading config file...');
        let cfg = fs.readFileSync('./config.json', 'utf-8');
        let json = JSON.parse(cfg);
        this.cfg = json as ConfigFile;
    }

    static getConfig(): ConfigFile {
        if (!this.cfg)
            this.load();
        
        return this.cfg;
    }
}