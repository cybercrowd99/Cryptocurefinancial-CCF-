/**
 * CCF — Evidence Chain Adjudication
 *
 * The CCF Evidence Chain Adjudication organ defines structural
 * evaluation boundaries for evidence chain artifacts.
 *
 * It does not:
 * - approve financial activity
 * - verify ownership
 * - identify people
 * - create identity confidence
 * - establish transactions
 * - create a ledger
 * - infer behavior
 * - predict outcomes
 *
 * Adjudication only:
 * - evaluates structural compliance
 * - checks artifact integrity
 * - returns bounded structural outcomes
 * - preserves CCF constitutional separation
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChain
} from "./ccf-evidence-chain";


/**
 * Structural adjudication results.
 *
 * These describe artifact condition only.
 */
export type CCFAdjudicationOutcome =
  | "ACCEPTED"
  | "REVIEW"
  | "REJECTED";


/**
 * Adjudication reasons.
 *
 * No financial semantics.
 * No identity semantics.
 */
export type CCFAdjudicationReason =
  | "STRUCTURE_VALID"
  | "EMPTY_CHAIN"
  | "INVALID_NODE"
  | "DOCTRINE_MISMATCH";


/**
 * Structural adjudication artifact.
 *
 * Not a financial decision.
 * Not an ownership decision.
 */
export interface CCFEvidenceChainAdjudication {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_ADJUDICATION";

  /**
   * Structural result.
   */
  outcome: CCFAdjudicationOutcome;

  /**
   * Structural reason.
   */
  reason: CCFAdjudicationReason;

  /**
   * Evaluated chain reference.
   *
   * Preserved only.
   */
  chain: CCFEvidenceChain;
}


/**
 * Adjudicate evidence chain structure.
 *
 * Pure structural evaluation.
 */
export function adjudicateCCFEvidenceChain(
  chain: CCFEvidenceChain
): CCFEvidenceChainAdjudication {

  if (!chain || chain.status !== "CCF_EVIDENCE_CHAIN") {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_CHAIN_ADJUDICATION",
      outcome: "REJECTED",
      reason: "DOCTRINE_MISMATCH",
      chain,
    });
  }

  if (!Array.isArray(chain.nodes) || chain.nodes.length === 0) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_CHAIN_ADJUDICATION",
      outcome: "REVIEW",
      reason: "EMPTY_CHAIN",
      chain,
    });
  }

  const validNodes = chain.nodes.every(
    (node) =>
      node &&
      node.status === "CCF_EVIDENCE_NODE" &&
      node.doctrine === "CCF_Constitution_Attachment"
  );

  if (!validNodes) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CCF_EVIDENCE_CHAIN_ADJUDICATION",
      outcome: "REJECTED",
      reason: "INVALID_NODE",
      chain,
    });
  }

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_ADJUDICATION",
    outcome: "ACCEPTED",
    reason: "STRUCTURE_VALID",
    chain,
  });
}
