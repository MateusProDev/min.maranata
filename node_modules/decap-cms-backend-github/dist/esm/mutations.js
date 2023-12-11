"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBranch = exports.reopenPullRequest = exports.deleteBranch = exports.createPullRequest = exports.createBranchAndPullRequest = exports.createBranch = exports.closePullRequestAndDeleteBranch = exports.closePullRequest = void 0;
var _graphqlTag = require("graphql-tag");
var fragments = _interopRequireWildcard(require("./fragments"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// updateRef only works for branches at the moment
const updateBranch = exports.updateBranch = (0, _graphqlTag.gql)`
  mutation updateRef($input: UpdateRefInput!) {
    updateRef(input: $input) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${fragments.branch}
`;

// deleteRef only works for branches at the moment
const deleteRefMutationPart = `
deleteRef(input: $deleteRefInput) {
  clientMutationId
}
`;
const deleteBranch = exports.deleteBranch = (0, _graphqlTag.gql)`
  mutation deleteRef($deleteRefInput: DeleteRefInput!) {
    ${deleteRefMutationPart}
  }
`;
const closePullRequestMutationPart = `
closePullRequest(input: $closePullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
`;
const closePullRequest = exports.closePullRequest = (0, _graphqlTag.gql)`
  mutation closePullRequestAndDeleteBranch($closePullRequestInput: ClosePullRequestInput!) {
    ${closePullRequestMutationPart}
  }
  ${fragments.pullRequest}
`;
const closePullRequestAndDeleteBranch = exports.closePullRequestAndDeleteBranch = (0, _graphqlTag.gql)`
  mutation closePullRequestAndDeleteBranch(
    $closePullRequestInput: ClosePullRequestInput!
    $deleteRefInput: DeleteRefInput!
  ) {
    ${closePullRequestMutationPart}
    ${deleteRefMutationPart}
  }
  ${fragments.pullRequest}
`;
const createPullRequestMutationPart = `
 createPullRequest(input: $createPullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
 `;
const createPullRequest = exports.createPullRequest = (0, _graphqlTag.gql)`
  mutation createPullRequest($createPullRequestInput: CreatePullRequestInput!) {
    ${createPullRequestMutationPart}
  }
  ${fragments.pullRequest}
`;
const createBranch = exports.createBranch = (0, _graphqlTag.gql)`
  mutation createBranch($createRefInput: CreateRefInput!) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${fragments.branch}
`;

// createRef only works for branches at the moment
const createBranchAndPullRequest = exports.createBranchAndPullRequest = (0, _graphqlTag.gql)`
  mutation createBranchAndPullRequest(
    $createRefInput: CreateRefInput!
    $createPullRequestInput: CreatePullRequestInput!
  ) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
    ${createPullRequestMutationPart}
  }
  ${fragments.branch}
  ${fragments.pullRequest}
`;
const reopenPullRequest = exports.reopenPullRequest = (0, _graphqlTag.gql)`
  mutation reopenPullRequest($reopenPullRequestInput: ReopenPullRequestInput!) {
    reopenPullRequest(input: $reopenPullRequestInput) {
      clientMutationId
      pullRequest {
        ...PullRequestParts
      }
    }
  }
  ${fragments.pullRequest}
`;