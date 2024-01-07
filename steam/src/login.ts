import SteamUser from 'steam-user';
import SteamTotp from 'steam-totp';
import credentials from '../db/accounts.json';

const client = new SteamUser();

const logOnOptions = {
  accountName: credentials[0]?.name,
  password: credentials[0]?.pass,
  twoFactorCode: SteamTotp.generateAuthCode(credentials[0]?.sharedSecret!)
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam');
  client.setPersona(SteamUser.EPersonaState.Online, credentials[0]?.name);
  client.gamesPlayed(274170);
});
