import { AsyncStorage } from 'react-native';
import shortid from 'shortid';
import natsort from 'natsort';

const api = (() => {
  const CLAIMS_KEY = '@DHAdusting:Calims';
  async function getClaims(callback) {
    try {
      const results = await AsyncStorage.getItem(CLAIMS_KEY);
      const claims = (!results && typeof results === 'object')
        ? []
        : JSON.parse(results);
      // alert(results);
      callback(claims);
    } catch (error) {
      alert(`Error retrieving data${error}`);
    }
  }

  function setClaim(claim, callback) {
    getClaims((claims) => {
      const tempClaim = claim;
      tempClaim.id = shortid.generate();
      claims.push(tempClaim);
      AsyncStorage.setItem(CLAIMS_KEY, JSON.stringify(claims));
      callback(claims);
    });
  }
  function findClaimIndex(claims, id) {
    return claims.findIndex(c => c.id === id);
  }

  function editClaim(claim, callback) {
    getClaims((claims) => {
      const index = findClaimIndex(claims, claim.id);
      const tempClaims = claims;
      tempClaims[index] = claim;
      AsyncStorage.setItem(CLAIMS_KEY, JSON.stringify(tempClaims));
      callback(claims);
    });
  }

  function removeClaim(id, callback) {
    getClaims((claims) => {
      const index = findClaimIndex(claims, id);
      const tempClaims = claims;
      tempClaims.splice(index, 1);
      AsyncStorage.setItem(CLAIMS_KEY, JSON.stringify(tempClaims));
      callback(tempClaims);
    });
  }
  function removeAllClaims() {
    AsyncStorage.removeItem(CLAIMS_KEY);
  }

  function sortClaimsByDate(claims, desc) {
    const sorter = natsort({ desc });
    claims.sort((a, b) => sorter(a.dateOfLoss, b.dateOfLoss));
  }

  function sortClaimsByName(claims, desc) {
    const sorter = natsort({ desc });
    claims.sort((a, b) => sorter(a.claim, b.claim));
  }

  const publicAPI = {
    createClaim: setClaim,
    removeAllClaims,
    editClaim,
    removeClaim,
    getClaims,
    sortClaimsByDate,
    sortClaimsByName,
  };

  return publicAPI;
})();

export default api;
