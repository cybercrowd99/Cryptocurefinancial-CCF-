/**
 * CCF — Evidence Chain Outcome
 *
 * The CCF Evidence Chain Outcome organ represents the bounded
 * structural result produced after evidence chain adjudication.
 *
 * It does not:
 * - approve financial activity
 * - verify ownership
 * - identify people
 * - create identity confidence
 * - record transactions
 * - create financial history
 * - become a ledger
 * - predict behavior
 *
 * Outcome only:
 * - preserves adjudication result
 * - records structural disposition
 * - maintains CCF constitutional separation
 * - provides downstream artifact awareness
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChain
} from "./ccf-evidence-chain";

import {
  CCFAdjudicationOutcome,
  CCFAdjudicationReason
} from "./ccf-evidence-chain-adjudication";


/**
 * Outcome classification.
 *
 * Describes structural state only.
 */
export type CCFOutcomeState =
  | "ACCEPTED"
  | "REVIEW"
  | "REJECTED";


/**
 * Structural outcome artifact.
 *
 * This is not:
 * - a payment outcome
 * - a transaction result
 * - ownership proof
 */
export interface CCFEvidenceChainOutcome {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_OUTCOME";

  /**
   * Final structural state.
   */
  outcome: CCFOutcomeState;

  /**
   * Original adjudication reason.
   */
  reason: CCFAdjudicationReason;

  /**
   * Preserved chain reference.
   */
  chain: CCFEvidenceChain;
}


/**
 * Create outcome from adjudication.
 *
 * Structural conversion only.
 */
export function createCCFEvidenceChainOutcome(
  chain: CCFEvidenceChain,
  outcome: CCFAdjudicationOutcome,
  reason: CCFAdjudicationReason
): CCFEvidenceChainOutcome {

  const artifact: CCFEvidenceChainOutcome = {
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_OUTCOME",
    outcome,
    reason,
    chain,
  };

  return Object.freeze(artifact);
}


/**
 * Inspect outcome.
 *
 * Returns structural state only.
 */
export function inspectCCFEvidenceChainOutcome(
  outcome: CCFEvidenceChainOutcome
) {
  return {
    doctrine: outcome.doctrine,
    status: outcome.status,
    outcome: outcome.outcome,
    reason: outcome.reason,
    nodeCount: outcome.chain.nodes.length,
  };
}
