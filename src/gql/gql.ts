/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query GetState($name: String) {\n        states(name: $name) {\n            id\n            name\n            key\n            slug\n        }\n    }\n": types.GetStateDocument,
    "\n    query GetTrade($name: String) {\n        states(name: $name) {\n            tradeSummary {\n                name\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n": types.GetTradeDocument,
    "\n    query Economy(\n        $name: String\n        $production: Boolean!\n        $employment: Boolean!\n        $trade: Boolean!\n    ) {\n        states(name: $name) {\n            name\n            productionSummary @include(if: $production) {\n                productionTypeByDollars {\n                    name\n                    amount\n                }\n                productionTypeByTons {\n                    name\n                    amount\n                }\n            }\n            employmentSummary @include(if: $employment) {\n                topIndustryByAverageSalary {\n                    industry\n                    averageSalary\n                }\n            }\n            tradeSummary @include(if: $trade) {\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n": types.EconomyDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetState($name: String) {\n        states(name: $name) {\n            id\n            name\n            key\n            slug\n        }\n    }\n"): (typeof documents)["\n    query GetState($name: String) {\n        states(name: $name) {\n            id\n            name\n            key\n            slug\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetTrade($name: String) {\n        states(name: $name) {\n            tradeSummary {\n                name\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetTrade($name: String) {\n        states(name: $name) {\n            tradeSummary {\n                name\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Economy(\n        $name: String\n        $production: Boolean!\n        $employment: Boolean!\n        $trade: Boolean!\n    ) {\n        states(name: $name) {\n            name\n            productionSummary @include(if: $production) {\n                productionTypeByDollars {\n                    name\n                    amount\n                }\n                productionTypeByTons {\n                    name\n                    amount\n                }\n            }\n            employmentSummary @include(if: $employment) {\n                topIndustryByAverageSalary {\n                    industry\n                    averageSalary\n                }\n            }\n            tradeSummary @include(if: $trade) {\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query Economy(\n        $name: String\n        $production: Boolean!\n        $employment: Boolean!\n        $trade: Boolean!\n    ) {\n        states(name: $name) {\n            name\n            productionSummary @include(if: $production) {\n                productionTypeByDollars {\n                    name\n                    amount\n                }\n                productionTypeByTons {\n                    name\n                    amount\n                }\n            }\n            employmentSummary @include(if: $employment) {\n                topIndustryByAverageSalary {\n                    industry\n                    averageSalary\n                }\n            }\n            tradeSummary @include(if: $trade) {\n                totalDollarAmount\n                totalTons\n                statesByDollars {\n                    name\n                    amount\n                }\n                statesByTons {\n                    name\n                    amount\n                }\n            }\n        }\n    }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;