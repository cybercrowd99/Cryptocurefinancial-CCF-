/**
 * CCF — Evidence Chain Neutral Transport
 *
 * The CCF Evidence Chain Neutral Transport organ defines the
 * bounded movement rules for evidence chain envelopes.
 *
 * It does not:
 * - store money
 * - represent transactions
 * - establish ownership
 * - identify people
 * - create financial history
 * - interpret behavior
 * - perform routing authority
 *
 * Neutral Transport only:
 * - moves structural artifacts between bounded organs
 * - preserves envelope integrity
 * - maintains CCF constitutional separation
 * - prevents semantic enrichment during movement
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChainEnvelope
} from "./ccf-evidence-chain-envelope";


/**
 * Transport classification.
 *
 * Describes movement condition only.
 */
export type CCFTransportState =
  | "READY"
  | "TRANSFERRED"
  | "REJECTED";


/**
 * Neutral transport artifact.
 *
 * This is not a transaction.
 * This is not a ledger event.
 * This is not ownership transfer.
 */
export interface CCFEvidenceChainNeutralTransport {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_NEUTRAL_TRANSPORT";

  /**
   * Current transport condition.
   */
  transportState: CCFTransportState;

  /**
   * Opaque transport identifier.
   *
   * No semantic meaning.
   */
  transportId: string;

  /**
   * Preserved envelope.
   *
   * No inspection.
   * No enrichment.
   */
  envelope: CCFEvidenceChainEnvelope;
}


/**
 * Create neutral transport wrapper.
 *
 * Structural movement only.
 */
export function createCCFEvidenceChainNeutralTransport(
  envelope: CCFEvidenceChainEnvelope,
  transportId: string
): CCFEvidenceChainNeutralTransport {

  const transport: CCFEvidenceChainNeutralTransport = {
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_NEUTRAL_TRANSPORT",
    transportState: "READY",
    transportId,
    envelope,
  };

  return Object.freeze(transport);
}


/**
 * Mark transport as transferred.
 *
 * No ownership transition occurs.
 */
export function markTransportTransferred(
  transport: CCFEvidenceChainNeutralTransport
): CCFEvidenceChainNeutralTransport {

  return Object.freeze({
    ...transport,
    transportState: "TRANSFERRED",
  });
}


/**
 * Mark transport as rejected.
 *
 * Rejection describes movement state only.
 */
export function markTransportRejected(
  transport: CCFEvidenceChainNeutralTransport
): CCFEvidenceChainNeutralTransport {

  return Object.freeze({
    ...transport,
    transportState: "REJECTED",
  });
}


/**
 * Inspect transport boundary.
 *
 * Returns structural status only.
 */
export function inspectNeutralTransport(
  transport: CCFEvidenceChainNeutralTransport
) {
  return {
    doctrine: transport.doctrine,
    status: transport.status,
    transportState: transport.transportState,
    transportId: transport.transportId,
    envelopeId: transport.envelope.envelopeId,
  };
}
