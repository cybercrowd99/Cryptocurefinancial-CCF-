/**
 * CORE — Financial Organ Adjudication
 *
 * The CORE Financial Organ Adjudication defines bounded structural
 * evaluation of the CCF financial organ binding.
 *
 * It does not:
 * - approve financial activity
 * - authorize ownership
 * - control accounts
 * - validate transactions
 * - identify people
 * - create identity authority
 * - become financial governance
 *
 * Adjudication only:
 * - evaluates structural compatibility
 * - preserves constitutional rules
 * - confirms organ integrity
 * - maintains sovereignty boundaries
 */

import { CoreFinancialOrgan } from "./core-financial-organ-binding";

/**
 * Structural adjudication decisions.
 */
export type CoreFinancialOrganAdjudicationDecision =
  | "ACCEPTED"
  | "REVIEW"
  | "REJECTED";

/**
 * Structural evaluation reasons.
 */
export type CoreFinancialOrganAdjudicationReason =
  | "STRUCTURE_VALID"
  | "MISSING_ORGAN"
  | "INVALID_STRUCTURE"
  | "DOCTRINE_MISMATCH";

/**
 * CORE Financial Organ Adjudication artifact.
 */
export interface CoreFinancialOrganAdjudication {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_ADJUDICATION";

  /**
   * Bound organ reference.
   */
  readonly organ: CoreFinancialOrgan;

  /**
   * Structural decision.
   */
  readonly decision: CoreFinancialOrganAdjudicationDecision;

  /**
   * Structural reason.
   */
  readonly reason: CoreFinancialOrganAdjudicationReason;
}

/**
 * Evaluate CORE financial organ structure.
 *
 * Structural validation only.
 */
export function adjudicateCoreFinancialOrgan(
  organ: CoreFinancialOrgan
): CoreFinancialOrganAdjudication {

  if (!organ) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CORE_FINANCIAL_ORGAN_ADJUDICATION",
      organ,
      decision: "REJECTED",
      reason: "MISSING_ORGAN",
    });
  }

  if (!organ.repo) {
    return Object.freeze({
      doctrine: "CCF_Constitution_Attachment",
      status: "CORE_FINANCIAL_ORGAN_ADJUDICATION",
      organ,
      decision: "REVIEW",
      reason: "INVALID_STRUCTURE",
    });
  }

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_ADJUDICATION",
    organ,
    decision: "ACCEPTED",
    reason: "STRUCTURE_VALID",
  });
}
