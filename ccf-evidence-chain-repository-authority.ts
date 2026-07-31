/**
 * CCF — Evidence Chain Repository Authority
 *
 * The CCF Evidence Chain Repository Authority defines the bounded
 * structural authority rules for the CCF Evidence Chain Repository.
 *
 * It does not:
 * - grant ownership
 * - control financial assets
 * - authorize transactions
 * - identify people
 * - create identity authority
 * - create access profiles
 * - become a ledger authority
 * - perform behavioral interpretation
 *
 * Authority only:
 * - validates repository structural boundaries
 * - preserves constitutional rules
 * - confirms artifact compatibility
 * - maintains non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

/**
 * Authority artifact discriminator.
 */
export type CCFRepositoryAuthorityStatus =
  | "CCF_EVIDENCE_REPOSITORY_AUTHORITY";

/**
 * Structural authority result.
 *
 * Describes repository condition only.
 */
export type CCFRepositoryAuthorityDecision =
  | "AUTHORIZED"
  | "REVIEW"
  | "REJECTED";

/**
 * Authority reason codes.
 *
 * Structural only.
 */
export type CCFRepositoryAuthorityReason =
  | "REPOSITORY_VALID"
  | "EMPTY_REPOSITORY"
  | "INVALID_REPOSITORY_STRUCTURE"
  | "DOCTRINE_MISMATCH";

/**
 * Authority artifact.
 *
 * This does not represent permission over humans,
 * money, accounts, or identity.
 */
export interface CCFEvidenceChainRepositoryAuthority {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: CCFRepositoryAuthorityStatus;

  /**
   * Repository structural reference.
   */
  readonly repository: CCFEvidenceChainRepository;

  /**
   * Structural decision.
   */
  readonly decision: CCFRepositoryAuthorityDecision;

  /**
   * Structural reason.
   */
  readonly reason: CCFRepositoryAuthorityReason;
}

/**
 * Evaluate repository authority.
 *
 * Pure structural validation.
 *
 * No ownership.
 * No identity.
 * No financial interpretation.
 */
export function evaluateCCFEvidenceChainRepositoryAuthority(
  repository: CCFEvidenceChainRepository
): CCFEvidenceChainRepositoryAuthority {
  if (!repository) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_AUTHORITY",
      repository,
      decision: "REJECTED",
      reason: "INVALID_REPOSITORY_STRUCTURE",
    });
  }

  if (repository.doctrine !== "CCF_EvidenceChain_Repository") {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_AUTHORITY",
      repository,
      decision: "REJECTED",
      reason: "DOCTRINE_MISMATCH",
    });
  }

  if (!Array.isArray(repository.entries)) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_AUTHORITY",
      repository,
      decision: "REVIEW",
      reason: "INVALID_REPOSITORY_STRUCTURE",
    });
  }

  if (repository.entries.length === 0) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_AUTHORITY",
      repository,
      decision: "REVIEW",
      reason: "EMPTY_REPOSITORY",
    });
  }

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_AUTHORITY",
    repository,
    decision: "AUTHORIZED",
    reason: "REPOSITORY_VALID",
  });
}
