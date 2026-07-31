/**
 * CCF — Evidence Chain Repository Neutral Transport
 *
 * The CCF Evidence Chain Repository Neutral Transport defines
 * bounded structural movement rules for repository envelopes.
 *
 * It does not:
 * - move money
 * - transfer ownership
 * - authorize financial activity
 * - identify people
 * - create identity relationships
 * - record transactions
 * - create behavioral history
 * - become a routing authority
 *
 * Neutral Transport only:
 * - manages artifact movement state
 * - preserves envelope integrity
 * - maintains structural boundaries
 * - prevents semantic enrichment
 * - preserves non-PII invariants
 */

import { CCFEvidenceChainRepositoryEnvelope } from "./ccf-evidence-chain-repository-envelope";

/**
 * Transport states.
 *
 * Structural movement condition only.
 */
export type CCFRepositoryTransportState =
  | "READY"
  | "TRANSFERRED"
  | "REJECTED";

/**
 * Transport artifact discriminator.
 */
export type CCFRepositoryTransportStatus =
  "CCF_EVIDENCE_REPOSITORY_NEUTRAL_TRANSPORT";

/**
 * Neutral transport artifact.
 */
export interface CCFEvidenceChainRepositoryNeutralTransport {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: CCFRepositoryTransportStatus;

  /**
   * Preserved envelope.
   */
  readonly envelope: CCFEvidenceChainRepositoryEnvelope;

  /**
   * Transport condition.
   */
  readonly state: CCFRepositoryTransportState;
}

/**
 * Create neutral transport artifact.
 *
 * Structural movement only.
 */
export function createCCFEvidenceChainRepositoryNeutralTransport(
  envelope: CCFEvidenceChainRepositoryEnvelope
): CCFEvidenceChainRepositoryNeutralTransport {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_NEUTRAL_TRANSPORT",
    envelope,
    state: "READY",
  });
}

/**
 * Transition transport state.
 *
 * No semantic interpretation.
 */
export function transitionCCFEvidenceChainRepositoryNeutralTransport(
  transport: CCFEvidenceChainRepositoryNeutralTransport,
  state: CCFRepositoryTransportState
): CCFEvidenceChainRepositoryNeutralTransport {
  return Object.freeze({
    doctrine: transport.doctrine,
    status: transport.status,
    envelope: transport.envelope,
    state,
  });
}
