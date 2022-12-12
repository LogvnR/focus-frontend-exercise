/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type EmploymentSummary = {
  __typename?: 'EmploymentSummary';
  topIndustryByAverageSalary?: Maybe<IndustryByAverageSalarySummary>;
  topIndustryByEmployee?: Maybe<IndustryByEmployeeSummary>;
};

export type IndustryByAverageSalarySummary = {
  __typename?: 'IndustryByAverageSalarySummary';
  averageSalary?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
};

export type IndustryByEmployeeSummary = {
  __typename?: 'IndustryByEmployeeSummary';
  employedCount?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
};

export type InterstateTradeForState = {
  __typename?: 'InterstateTradeForState';
  amount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type InterstateTradeSummary = {
  __typename?: 'InterstateTradeSummary';
  name?: Maybe<Scalars['String']>;
  statesByDollars?: Maybe<Array<Maybe<InterstateTradeForState>>>;
  statesByTons?: Maybe<Array<Maybe<InterstateTradeForState>>>;
  totalDollarAmount?: Maybe<Scalars['Float']>;
  totalTons?: Maybe<Scalars['Float']>;
};

export type ProductionSummary = {
  __typename?: 'ProductionSummary';
  name?: Maybe<Scalars['String']>;
  productionTypeByDollars?: Maybe<Array<Maybe<InterstateTradeForState>>>;
  productionTypeByTons?: Maybe<Array<Maybe<InterstateTradeForState>>>;
  totalDollarAmount?: Maybe<Scalars['Float']>;
  totalTons?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  states?: Maybe<Array<Maybe<State>>>;
};


export type QueryStatesArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type State = {
  __typename?: 'State';
  employmentSummary?: Maybe<EmploymentSummary>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productionSummary?: Maybe<ProductionSummary>;
  slug?: Maybe<Scalars['String']>;
  tradeSummary?: Maybe<InterstateTradeSummary>;
};

export type GetTradeQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type GetTradeQuery = { __typename?: 'Query', states?: Array<{ __typename?: 'State', tradeSummary?: { __typename?: 'InterstateTradeSummary', name?: string | null, totalDollarAmount?: number | null, totalTons?: number | null, statesByDollars?: Array<{ __typename?: 'InterstateTradeForState', name?: string | null, amount?: number | null } | null> | null, statesByTons?: Array<{ __typename?: 'InterstateTradeForState', name?: string | null, amount?: number | null } | null> | null } | null } | null> | null };

export type GetStateQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type GetStateQuery = { __typename?: 'Query', states?: Array<{ __typename?: 'State', id?: string | null, name?: string | null, key?: string | null, slug?: string | null } | null> | null };


export const GetTradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrade"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tradeSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"totalDollarAmount"}},{"kind":"Field","name":{"kind":"Name","value":"totalTons"}},{"kind":"Field","name":{"kind":"Name","value":"statesByDollars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statesByTons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTradeQuery, GetTradeQueryVariables>;
export const GetStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"states"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetStateQuery, GetStateQueryVariables>;