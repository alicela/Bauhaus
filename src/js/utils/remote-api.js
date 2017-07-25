import { baseHost } from 'config/config';

const urlGetDisseminationStatusList = baseHost + 'disseminationStatus';

const urlGetConceptsList = baseHost + 'concepts';
const urlGetConceptsSearchList = baseHost + 'concepts/search';
const urlGetConceptGeneral = baseHost + 'concept';
const urlGetConceptLinks = baseHost + 'concept';
const urlGetConceptNotes = baseHost + 'concept';
const urlPostConcepts = baseHost + 'private/concepts';
const urlPostModifiedConcepts = baseHost + 'private/concept';
const urlGetConceptsToValidate = baseHost + 'concepts/toValidate';
const urlPostConceptsToValidate = baseHost + 'private/concepts/validate';
const urlPostConceptsToExport = baseHost + 'private/concepts/export';

const urlGetCollectionsList = baseHost + 'collections';
const urlGetCollection = baseHost + 'collection';
const urlPostCollections = baseHost + 'private/collections';
const urlPostModifiedCollections = baseHost + 'private/collection';
const urlGetCollectionsToValidateList = baseHost + 'collections/toValidate';
const urlPostCollectionsToValidate = baseHost + 'private/collections/validate';
const urlPostCollectionsToExport = baseHost + 'private/collections/export';

const urlPostCollectionSend = baseHost + 'private/collection/send';
const urlPostConceptSend = baseHost + 'private/concept/send';

export const getDisseminationStatusList = () =>
  fetch(urlGetDisseminationStatusList, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

// TODO value body response for errors
// TODO apply this pattern to all remote calls and modify actions accordingly (
// we return a string and not an error object)

export const getConceptsList = () =>
  fetch(urlGetConceptsList, {
    headers: {
      Accept: 'application/json',
    },
  }).then(
    res => {
      if (res.ok) return res.json();
      else return Promise.reject(res.statusText);
    },
    err => Promise.reject(err.toString())
  );

export const getConceptsSearchList = () =>
  fetch(urlGetConceptsSearchList, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getConceptsToValidate = () =>
  fetch(urlGetConceptsToValidate, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getConceptGeneral = id =>
  fetch(urlGetConceptGeneral + '/' + id, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getConceptLinks = id =>
  fetch(urlGetConceptLinks + '/' + id + '/links', {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getConceptNotes = (id, conceptVersion) =>
  fetch(urlGetConceptNotes + '/' + id + '/notes/' + conceptVersion, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const postConcepts = concept =>
  fetch(urlPostConcepts, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(concept),
  }).then(res => res.text()); // concept id

export const postModifiedConcepts = (id, concept) =>
  fetch(urlPostModifiedConcepts + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(concept),
  }).then(res => id); // normalize `postConcepts` and `postModifiedConcepts`

export const postConceptsToValidate = concepts =>
  fetch(urlPostConceptsToValidate, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(concepts),
  });

export const postConceptsToExport = concepts =>
  fetch(urlPostConceptsToExport, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(concepts),
  });

export const postConceptSend = concept =>
  fetch(urlPostConceptSend, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(concept),
  });

export const getCollectionsList = () =>
  fetch(urlGetCollectionsList, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getCollectionsToValidateList = () =>
  fetch(urlGetCollectionsToValidateList, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getCollection = id =>
  fetch(urlGetCollection + '/' + id, {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const getCollectionMembers = id =>
  fetch(urlGetCollection + '/' + id + '/members', {
    headers: {
      Accept: 'application/json',
    },
  }).then(res => res.json());

export const postCollections = collection =>
  fetch(urlPostCollections, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(collection),
  });

export const postModifiedCollections = (id, collection) =>
  fetch(urlPostModifiedCollections + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(collection),
  });

export const postCollectionsToValidate = collection =>
  fetch(urlPostCollectionsToValidate, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(collection),
  });

export const postCollectionsToExport = collection =>
  fetch(urlPostCollectionsToExport, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(collection),
  });

export const postCollectionSend = collection =>
  fetch(urlPostCollectionSend, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(collection),
  });
