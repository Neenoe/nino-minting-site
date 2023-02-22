

export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://https://raw.githubusercontent.com/Neenoe/nino-minting-site/tree/main/public/NinoNFT/";
    // The api is sending back metadata for a Nino NFT
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "Nino NFT #" + tokenId,
      description: "This is NFT collection consists of my frens pictures as the arts.",
      image: image_url + tokenId + ".jpg",
    });
  }