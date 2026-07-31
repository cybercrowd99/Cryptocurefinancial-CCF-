/**
 * CCF — Evidence Chain Repository
 *
 * The CCF Evidence Chain Repository provides bounded structural
 * organization for evidence chain artifacts.
 *
 * It does not:
 * - store money
 * - track balances
 * - record transactions
 * - represent ownership
 * - contain identity
 * - create financial history
 * - perform behavioral analysis
 * - become a ledger
 *
 * Repository only:
 * - preserves evidence chain artifacts
 * - maintains structural references
 * - provides neutral retrieval
 * - attaches to the CCF constitutional doctrine
 * - maintains non-PII sovereignty boundaries
 */

import { CCFEvidenceChain } from "./ccf-evidence-chain";

/**
 * Repository artifact discriminator.
 */
export type CCFRepositoryStatus =
  | "CCF_EVIDENCE_REPOSITORY";

/**
 * Opaque repository identifier.
 *
 * Contains no semantic meaning.
 * Contains no financial meaning.
 */
export interface CCFEvidenceRepositoryId {
  readonly value: string;
}

/**
 * Structural repository entry.
 *
 * This is not a record of activity.
 * This is not a transaction.
 * This is not ownership.
 */
export interface CCFEvidenceRepositoryEntry {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: CCFRepositoryStatus;

  /**
   * Opaque repository entry identifier.
   */
  readonly id: CCFEvidenceRepositoryId;

  /**
   * Preserved evidence chain reference.
   *
   * Structural only.
   */
  readonly chain: CCFEvidenceChain;
}

/**
 * CCF Evidence Chain Repository.
 *
 * Maintains bounded structural artifacts.
 *
 * Not:
 * - ledger
 * - database of people
 * - financial history
 */
export interface CCFEvidenceChainRepository {
  readonly doctrine: "CCF_EvidenceChain_Repository";
  readonly status: "CCF_EVIDENCE_REPOSITORY";

  /**
   * Immutable evidence chain artifacts.
   */
  readonly entries: ReadonlyArray<CCFEvidenceRepositoryEntry>;
}

/**
 * Create repository identifier.
 */
export function createRepositoryId(
  marker: string
): CCFEvidenceRepositoryId {
  return Object.freeze({
    value: `ccf-evidence-repo:${marker}`,
  });
}

/**
 * Create repository entry.
 *
 * Pure structural attachment.
 */
export function createEvidenceRepositoryEntry(
  id: CCFEvidenceRepositoryId,
  chain: CCFEvidenceChain
): CCFEvidenceRepositoryEntry {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY",
    id,
    chain,
  });
}

/**
 * Create CCF Evidence Chain Repository.
 *
 * Immutable structural collection.
 */
export function createCCFEvidenceChainRepository(
  entries: CCFEvidenceRepositoryEntry[] = []
): CCFEvidenceChainRepository {
  return Object.freeze({
    doctrine: "CCF_EvidenceChain_Repository",
    status: "CCF_EVIDENCE_REPOSITORY",
    entries: Object.freeze([...entries]),
  });
}
