/**
 * CCF — Evidence Chain Repository Lifecycle
 *
 * The CCF Evidence Chain Repository Lifecycle defines bounded
 * structural state progression for repository artifacts.
 *
 * It does not:
 * - store money
 * - track balances
 * - record transactions
 * - represent ownership
 * - contain identity
 * - create financial history
 * - create behavioral models
 * - become a ledger
 *
 * Lifecycle only:
 * - represents artifact condition
 * - preserves repository integrity
 * - controls structural progression
 * - maintains constitutional separation
 * - preserves non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

/**
 * Repository lifecycle states.
 *
 * These describe artifact condition only.
 */
export type CCFRepositoryLifecycleState =
  | "CREATED"
  | "ACTIVE"
  | "SEALED"
  | "RETIRED";

/**
 * Lifecycle artifact discriminator.
 */
export type CCFRepositoryLifecycleStatus =
  "CCF_EVIDENCE_REPOSITORY_LIFECYCLE";

/**
 * Repository lifecycle artifact.
 */
export interface CCFEvidenceChainRepositoryLifecycle {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: CCFRepositoryLifecycleStatus;

  /**
   * Repository reference.
   */
  readonly repository: CCFEvidenceChainRepository;

  /**
   * Current structural lifecycle state.
   */
  readonly state: CCFRepositoryLifecycleState;
}

/**
 * Create repository lifecycle artifact.
 *
 * Structural only.
 */
export function createCCFEvidenceChainRepositoryLifecycle(
  repository: CCFEvidenceChainRepository,
  state: CCFRepositoryLifecycleState = "CREATED"
): CCFEvidenceChainRepositoryLifecycle {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_LIFECYCLE",
    repository,
    state,
  });
}

/**
 * Advance repository lifecycle state.
 *
 * No financial meaning.
 * No ownership meaning.
 * No identity meaning.
 */
export function transitionCCFEvidenceChainRepositoryLifecycle(
  lifecycle: CCFEvidenceChainRepositoryLifecycle,
  nextState: CCFRepositoryLifecycleState
): CCFEvidenceChainRepositoryLifecycle {
  return Object.freeze({
    doctrine: lifecycle.doctrine,
    status: lifecycle.status,
    repository: lifecycle.repository,
    state: nextState,
  });
}
