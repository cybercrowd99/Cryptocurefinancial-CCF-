/**
 * CCF — Evidence Chain Repository Adjudication
 *
 * The CCF Evidence Chain Repository Adjudication performs bounded
 * structural evaluation of repository artifacts.
 *
 * It does not:
 * - approve financial activity
 * - authorize ownership
 * - identify people
 * - create accounts
 * - record transactions
 * - become a ledger
 * - infer behavior
 * - predict outcomes
 *
 * Adjudication only:
 * - evaluates structural validity
 * - preserves constitutional boundaries
 * - verifies repository integrity
 * - maintains non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

export type CCFRepositoryAdjudicationDecision =
  | "ACCEPTED"
  | "REVIEW"
  | "REJECTED";

export type CCFRepositoryAdjudicationReason =
  | "STRUCTURE_VALID"
  | "EMPTY_REPOSITORY"
  | "INVALID_REPOSITORY"
  | "DOCTRINE_MISMATCH";

export interface CCFEvidenceChainRepositoryAdjudication {
  readonly doctrine: "CCF_Constitution_Attachment";
  readonly status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION";
  readonly repository: CCFEvidenceChainRepository;
  readonly decision: CCFRepositoryAdjudicationDecision;
  readonly reason: CCFRepositoryAdjudicationReason;
}

export function adjudicateCCFEvidenceChainRepository(
  repository: CCFEvidenceChainRepository
): CCFEvidenceChainRepositoryAdjudication {

  if (!repository) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION",
      repository,
      decision: "REJECTED",
      reason: "INVALID_REPOSITORY",
    });
  }

  if (repository.doctrine !== "CCF_EvidenceChain_Repository") {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION",
      repository,
      decision: "REJECTED",
      reason: "DOCTRINE_MISMATCH",
    });
  }

  if (!Array.isArray(repository.entries)) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION",
      repository,
      decision: "REJECTED",
      reason: "INVALID_REPOSITORY",
    });
  }

  if (repository.entries.length === 0) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION",
      repository,
      decision: "REVIEW",
      reason: "EMPTY_REPOSITORY",
    });
  }

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_ADJUDICATION",
    repository,
    decision: "ACCEPTED",
    reason: "STRUCTURE_VALID",
  });
}
