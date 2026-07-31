/**
 * CCF — Evidence Chain Repository Envelope
 *
 * The CCF Evidence Chain Repository Envelope provides a neutral
 * structural transport wrapper for repository artifacts.
 *
 * It does not:
 * - store money
 * - represent accounts
 * - contain identity
 * - prove ownership
 * - record transactions
 * - create financial history
 * - create behavioral models
 * - become a ledger
 *
 * Envelope only:
 * - wraps repository structure
 * - preserves artifact boundaries
 * - provides neutral movement context
 * - maintains non-PII invariants
 * - preserves constitutional separation
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

/**
 * Envelope classification.
 *
 * Structural only.
 */
export type CCFRepositoryEnvelopeClass =
  | "NEUTRAL_REPOSITORY_ARTIFACT";

/**
 * Repository envelope status.
 */
export type CCFRepositoryEnvelopeStatus =
  | "CCF_EVIDENCE_REPOSITORY_ENVELOPE";

/**
 * Neutral repository envelope.
 */
export interface CCFEvidenceChainRepositoryEnvelope {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: CCFRepositoryEnvelopeStatus;

  /**
   * Opaque envelope identifier.
   */
  readonly envelopeId: string;

  /**
   * Structural classification.
   */
  readonly classification: CCFRepositoryEnvelopeClass;

  /**
   * Wrapped repository artifact.
   */
  readonly repository: CCFEvidenceChainRepository;
}

/**
 * Create repository envelope.
 *
 * Pure structural wrapping.
 */
export function createCCFEvidenceChainRepositoryEnvelope(
  repository: CCFEvidenceChainRepository,
  envelopeId: string
): CCFEvidenceChainRepositoryEnvelope {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_ENVELOPE",
    envelopeId,
    classification: "NEUTRAL_REPOSITORY_ARTIFACT",
    repository,
  });
}

/**
 * Inspect repository envelope.
 *
 * Returns structural contents only.
 */
export function inspectCCFEvidenceChainRepositoryEnvelope(
  envelope: CCFEvidenceChainRepositoryEnvelope
): CCFEvidenceChainRepository {
  return envelope.repository;
}
