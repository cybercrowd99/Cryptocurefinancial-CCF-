/**
 * CCF — Evidence Chain Repository Qualifiers
 *
 * The CCF Evidence Chain Repository Qualifiers provide bounded
 * structural descriptors for repository artifacts.
 *
 * They do not:
 * - store money
 * - represent ownership
 * - identify people
 * - record transactions
 * - create financial history
 * - infer behavior
 * - become a ledger
 * - predict financial activity
 *
 * Qualifiers only:
 * - describe repository structure
 * - preserve constitutional context
 * - maintain neutral classification
 * - preserve non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

/**
 * Structural repository qualifiers.
 */
export type CCFRepositoryQualifier =
  | "REPOSITORY_PRESENT"
  | "REPOSITORY_COMPLETE"
  | "STRUCTURE_VALID"
  | "NEUTRAL_ARTIFACT";

/**
 * Repository qualifier artifact.
 */
export interface CCFEvidenceChainRepositoryQualifiers {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CCF_EVIDENCE_REPOSITORY_QUALIFIERS";

  /**
   * Repository reference.
   */
  readonly repository: CCFEvidenceChainRepository;

  /**
   * Structural descriptors.
   */
  readonly qualifiers: ReadonlyArray<CCFRepositoryQualifier>;
}

/**
 * Build repository qualifiers.
 *
 * Pure structural classification.
 */
export function buildCCFEvidenceChainRepositoryQualifiers(
  repository: CCFEvidenceChainRepository,
  qualifiers: ReadonlyArray<CCFRepositoryQualifier>
): CCFEvidenceChainRepositoryQualifiers {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_QUALIFIERS",
    repository,
    qualifiers: Object.freeze([...qualifiers]),
  });
}
