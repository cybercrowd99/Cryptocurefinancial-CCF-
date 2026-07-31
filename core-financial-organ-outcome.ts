/**
 * CORE — Financial Organ Outcome
 *
 * The CORE Financial Organ Outcome preserves the bounded
 * structural disposition of financial organ adjudication.
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
 * Outcome only:
 * - preserves adjudication results
 * - maintains organ references
 * - provides neutral disposition
 * - preserves constitutional separation
 */

import { CoreFinancialOrgan } from "./core-financial-organ-binding";
import { CoreFinancialOrganAdjudication } from "./core-financial-organ-adjudication";

/**
 * CORE Financial Organ Outcome artifact.
 */
export interface CoreFinancialOrganOutcome {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_OUTCOME";

  /**
   * Bound organ reference.
   */
  readonly organ: CoreFinancialOrgan;

  /**
   * Preserved adjudication result.
   */
  readonly adjudication: CoreFinancialOrganAdjudication;
}

/**
 * Build CORE financial organ outcome.
 *
 * Pure structural preservation.
 */
export function buildCoreFinancialOrganOutcome(
  organ: CoreFinancialOrgan,
  adjudication: CoreFinancialOrganAdjudication
): CoreFinancialOrganOutcome {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_OUTCOME",
    organ,
    adjudication,
  });
}
