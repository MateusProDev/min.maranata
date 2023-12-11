"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileSha = exports.branch = exports.blob = void 0;
exports.files = files;
exports.user = exports.statues = exports.repository = exports.repoPermission = exports.pullRequests = exports.pullRequestAndBranch = exports.pullRequest = exports.openAuthoringBranches = void 0;
var _graphqlTag = require("graphql-tag");
var _commonTags = require("common-tags");
var fragments = _interopRequireWildcard(require("./fragments"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const repoPermission = exports.repoPermission = (0, _graphqlTag.gql)`
  query repoPermission($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      viewerPermission
    }
  }
  ${fragments.repository}
`;
const user = exports.user = (0, _graphqlTag.gql)`
  query {
    viewer {
      id
      avatar_url: avatarUrl
      name
      login
    }
  }
`;
const blob = exports.blob = (0, _graphqlTag.gql)`
  query blob($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      object(expression: $expression) {
        ... on Blob {
          ...BlobWithTextParts
        }
      }
    }
  }
  ${fragments.repository}
  ${fragments.blobWithText}
`;
const statues = exports.statues = (0, _graphqlTag.gql)`
  query statues($owner: String!, $name: String!, $sha: GitObjectID!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      object(oid: $sha) {
        ...ObjectParts
        ... on Commit {
          status {
            id
            contexts {
              id
              context
              state
              target_url: targetUrl
            }
          }
        }
      }
    }
  }
  ${fragments.repository}
  ${fragments.object}
`;
function buildFilesQuery(depth = 1) {
  const PLACE_HOLDER = 'PLACE_HOLDER';
  let query = (0, _commonTags.oneLine)`
    ...ObjectParts
    ... on Tree {
      entries {
        ...FileEntryParts
        ${PLACE_HOLDER}
      }
    }
  `;
  for (let i = 0; i < depth - 1; i++) {
    query = query.replace(PLACE_HOLDER, (0, _commonTags.oneLine)`
        object {
          ... on Tree {
            entries {
              ...FileEntryParts
              ${PLACE_HOLDER}
            }
          }
        }
    `);
  }
  query = query.replace(PLACE_HOLDER, '');
  return query;
}
function files(depth) {
  return (0, _graphqlTag.gql)`
    query files($owner: String!, $name: String!, $expression: String!) {
      repository(owner: $owner, name: $name) {
        ...RepositoryParts
        object(expression: $expression) {
          ${buildFilesQuery(depth)}
        }
      }
    }
    ${fragments.repository}
    ${fragments.object}
    ${fragments.fileEntry}
  `;
}
const branchQueryPart = `
branch: ref(qualifiedName: $qualifiedName) {
  ...BranchParts
}
`;
const branch = exports.branch = (0, _graphqlTag.gql)`
  query branch($owner: String!, $name: String!, $qualifiedName: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      ${branchQueryPart}
    }
  }
  ${fragments.repository}
  ${fragments.branch}
`;
const openAuthoringBranches = exports.openAuthoringBranches = (0, _graphqlTag.gql)`
  query openAuthoringBranches($owner: String!, $name: String!, $refPrefix: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      refs(refPrefix: $refPrefix, last: 100) {
        nodes {
          ...BranchParts
        }
      }
    }
  }
  ${fragments.repository}
  ${fragments.branch}
`;
const repository = exports.repository = (0, _graphqlTag.gql)`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
    }
  }
  ${fragments.repository}
`;
const pullRequestQueryPart = `
pullRequest(number: $number) {
  ...PullRequestParts
}
`;
const pullRequest = exports.pullRequest = (0, _graphqlTag.gql)`
  query pullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      id
      ${pullRequestQueryPart}
    }
  }
  ${fragments.pullRequest}
`;
const pullRequests = exports.pullRequests = (0, _graphqlTag.gql)`
  query pullRequests($owner: String!, $name: String!, $head: String, $states: [PullRequestState!]) {
    repository(owner: $owner, name: $name) {
      id
      pullRequests(last: 100, headRefName: $head, states: $states) {
        nodes {
          ...PullRequestParts
        }
      }
    }
  }
  ${fragments.pullRequest}
`;
const pullRequestAndBranch = exports.pullRequestAndBranch = (0, _graphqlTag.gql)`
  query pullRequestAndBranch($owner: String!, $name: String!, $originRepoOwner: String!, $originRepoName: String!, $qualifiedName: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      ${branchQueryPart}
    }
    origin: repository(owner: $originRepoOwner, name: $originRepoName) {
      ...RepositoryParts
      ${pullRequestQueryPart}
    }
  }
  ${fragments.repository}
  ${fragments.branch}
  ${fragments.pullRequest}
`;
const fileSha = exports.fileSha = (0, _graphqlTag.gql)`
  query fileSha($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      file: object(expression: $expression) {
        ...ObjectParts
      }
    }
  }
  ${fragments.repository}
  ${fragments.object}
`;