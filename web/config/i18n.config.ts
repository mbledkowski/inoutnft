export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      login: 'Connect wallet',
      motto: 'Trade your Game Items on DEX',
      steamnft: 'Steam Items to NFT',
      nftsteam: 'NFT to Steam Items',
      howitworks: 'How it works?',
      start: "Start now",
      source: "Source code",
      createdby: "Created by",
      createdbyname: "Maciej Błe˛dkowski",
      legalMumboJumbo: "This service is not affiliated in any way with Valve Corp. and its affiliates (collectively the “Valve”). We do not claim any rights to the virtual items, which remain the intellectual property of Valve Corp.",
      howto: {
        title: "How to...",
        connectTitle: "Connect",
        connectDesc: "Your crypto wallet, and Steam account",
        sendTitle: "Send",
        sendDescIn: "Your Steam items to our bot",
        sendDescOut: "Your NFTs to our wallet",
        payTitle: "Pay",
        payDescIn: "For the transaction",
        payDescOut: "For the transaction, and small service fee (see below)",
        receiveTitle: "Receive",
        receiveDescIn: "Your NFTs on your crypto wallet",
        receiveDescOut: "Your Steam items from our bot",
        tradeTitleIn: "Trade",
        tradeDescIn: "On your favourite NFT marketplace",
        playTitleOut: "Play",
        playDescOut: "With your new skin",
      },
      underhood: {
        title: "Under the hood",
        desc: "When you send your item to our bot, our bot will store that item and mint you an NFT. The item will stay as long in the bot's inventory, as the NFT has not been returned. When you return the NFT, we will give you the exact same item back.",
        figDesc: "Figure above shows, how exactly our service works, from the user standpoint."
      },
      pricing: {
        title: "Service fee",
        withdrawalOf: "Withdrawal of",
        first: "<{lessThan} items",
        second: ">={moreThan} and <{lessThan} items",
        third: ">={moreThan} items",
        legalMumboJumbo: {
          firstPart: "Service fees are subject to change. These fees cover the cost of our infrastructure. Any changes to our service fees will be announced 30 days prior to their implementation. The announcement will be made via our official Mastodon account, {masnodon}.",
          secondPart: "It is the responsibility of the user to stay updated with our posts on Mastodon. The changes will affect all users in possession of { name } NFT(s). If a user disagrees with the new fee structure, they have the right to sell or withdraw their NFTs prior to the implementation."
        }
      }
    },
    pl: {
      welcome: 'Witaj',
      login: 'Połącz portfel',
      motto: 'Handluj swoimi Przedmiotami Z Gier na Zdecentralizowanym Rynku',
      steamnft: 'Przedmioty Steam na NFT',
      nftsteam: 'NFT na Przedmioty Steam',
      howitworks: 'Jak to działa?',
      start: "Zaczynamy",
      source: "Kod źródłowy",
      createdby: "Stworzone przez",
      createdbyname: "Macieja Błe˛dkowskiego",
      legalMumboJumbo: "Ta usługa nie jest w żaden sposób powiązana z Valve Corp. i powiązanymi podmiotami (kolektywnie „Valve”). Nie rościmy sobie jakiechkolwiek praw do wirtualnych przedmiotów, które pozostają własnością intelektualną Valve Corp.",
      howto: {
        title: "Jak...",
        connectTitle: "Połącz",
        connectDesc: "Twój portfel kryptowalutowy i konto Steam",
        sendTitle: "Wyślij",
        sendDescIn: "Twoje przedmioty Steam do naszego bota",
        sendDescOut: "Twoje NFT-y do naszego portfela",
        payTitle: "Zapłać",
        payDescIn: "Za transakcję",
        payDescOut: "Za transakcję i niewielką opłatę serwisową (patrz poniżej)",
        receiveTitle: "Odbierz",
        receiveDescIn: "Twoje NFT-y na portfelu kryptowalutowym",
        receiveDescOut: "Twoje przedmioty Steam od naszego bota",
        tradeTitleIn: "Handluj",
        tradeDescIn: "Na ulubionym rynku NFT",
        playTitleOut: "Graj",
        playDescOut: "Swoim nowym skin-em",
      },
      underhood: {
        title: "Pod maską",
        desc: "Kiedy wyślesz swój przedmiot do naszego bota, nasz bot przechowa ten przedmiot i wygeneruje dla Ciebie NFT. Przedmiot pozostanie w inwentarzu bota, tak długo jak NFT nie zostanie zwrócone. Kiedy zwrócisz NFT, oddamy Ci dokładnie ten sam przedmiot.",
        figDesc: "Rysunek powyżej pokazuje, jak dokładnie działa nasza usługa, z punktu widzenia użytkownika."
      },
      pricing: {
        title: "Opłata serwisowa",
        withdrawalOf: "Wypłata",
        first: "<{lessThan} przedmiotów",
        second: ">={moreThan} i <{lessThan} przedmiotów",
        third: ">={moreThan} przedmiotów",
        legalMumboJumbo: "Opłaty serwisowe mogą ulec zmianie. Opłaty te pokrywają koszty naszej infrastruktury. Wszelkie zmiany w opłatach serwisowych zostaną ogłoszone 30 dni przed ich wprowadzeniem. Ogłoszenie zostanie dokonane za pośrednictwem naszego oficjalnego konta Mastodon, {masnodon}.\nOdpowiedzialność za pozostanie na bieżąco z naszymi postami na Mastodonie spoczywa na użytkowniku. Zmiany będą dotyczyć wszystkich użytkowników posiadających NFT-y {name}. W przypadku, gdy użytkownik nie zgadza się z nową strukturą opłat, ma on prawo sprzedać lub wymienić swoje NFT-y przed wprowadzeniem zmian."
      }
    }
  }
}))
