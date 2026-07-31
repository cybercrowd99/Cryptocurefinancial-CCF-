/**
 * CCF — Evidence Chain Repository Outcome
 *
 * The CCF Evidence Chain Repository Outcome preserves the bounded
 * structural disposition of repository adjudication.
 *
 * It does not:
 * - approve financial activity
 * - authorize ownership
 * - identify people
 * - create accounts
 * - record transactions
 * - become a financial ledger
 * - infer behavior
 * - predict financial outcomes
 *
 * Outcome only:
 * - preserves structural disposition
 * - records adjudication result
 * - maintains repository integrity
 * - preserves constitutional separation
 * - maintains non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";
import {
  CCFEvidenceChainRepositoryAdjudication,
} from "./ccf-evidence-chain-repository-adjudication";

/**
 * Repository outcome artifact.
 */
export interface CCFEvidenceChainRepositoryOutcome {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CCF_EVIDENCE_REPOSITORY_OUTCOME";

  /**
   * Repository reference.
   */
  readonly repository: CCFEvidenceChainRepository;

  /**
   * Preserved adjudication.
   */
  readonly adjudication: CCFEvidenceChainRepositoryAdjudication;
}

/**
 * Build repository outcome.
 *
 * Pure structural preservation.
 */
export function buildCCFEvidenceChainRepositoryOutcome(
  repository: CCFEvidenceChainRepository,
  adjudication: CCFEvidenceChainRepositoryAdjudication
): CCFEvidenceChainRepositoryOutcome {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_OUTCOME",
    repository,
    adjudication,
  });
}
