/**
 * CCF — Evidence Chain Envelope
 *
 * The CCF Evidence Chain Envelope is a neutral transport artifact
 * for carrying structural evidence chain references.
 *
 * It does not:
 * - store money
 * - represent transactions
 * - prove ownership
 * - contain identity
 * - create financial history
 * - perform behavioral analysis
 * - become a ledger
 *
 * Envelope only:
 * - transports structural evidence context
 * - preserves CCF constitutional attachment
 * - maintains non-PII boundaries
 * - provides neutral movement between bounded organs
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChain
} from "./ccf-evidence-chain";


/**
 * Neutral envelope classification.
 *
 * Describes artifact purpose only.
 */
export type CCFEvidenceEnvelopeType =
  | "STRUCTURAL"
  | "NEUTRAL_TRANSPORT";


/**
 * CCF Evidence Chain Envelope
 *
 * This is not ownership.
 * This is not financial activity.
 * This is not a user artifact.
 */
export interface CCFEvidenceChainEnvelope {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_ENVELOPE";

  /**
   * Envelope classification.
   */
  envelopeType: CCFEvidenceEnvelopeType;

  /**
   * Opaque structural reference.
   *
   * No semantic meaning.
   */
  envelopeId: string;

  /**
   * Preserved evidence chain.
   *
   * Not interpreted.
   * Not enriched.
   */
  chain: CCFEvidenceChain;
}


/**
 * Create a neutral CCF evidence envelope.
 *
 * Pure structural wrapping.
 */
export function createCCFEvidenceChainEnvelope(
  chain: CCFEvidenceChain,
  envelopeId: string
): CCFEvidenceChainEnvelope {

  const envelope: CCFEvidenceChainEnvelope = {
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_ENVELOPE",
    envelopeType: "NEUTRAL_TRANSPORT",
    envelopeId,
    chain,
  };

  return Object.freeze(envelope);
}


/**
 * Read envelope structure.
 *
 * Returns no interpretation.
 */
export function inspectCCFEvidenceChainEnvelope(
  envelope: CCFEvidenceChainEnvelope
) {
  return {
    doctrine: envelope.doctrine,
    status: envelope.status,
    envelopeType: envelope.envelopeType,
    envelopeId: envelope.envelopeId,
    nodeCount: envelope.chain.nodes.length,
  };
}
