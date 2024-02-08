import SteamCommunity from "steamcommunity";
import TradeOfferManager from "steam-tradeoffer-manager";
import credentials from '../db/accounts.json';

import client from "./login";

const community = new SteamCommunity();

const manager = new TradeOfferManager({
  steam: client,
  community: community,
  language: 'en'
});

client.on('webSession', (sessionid, cookies) => {
  manager.setCookies(cookies);

  community.setCookies(cookies);
  community.startConfirmationChecker(10000, credentials[0]?.identitySecret!)
});

export default { client, community, manager };
