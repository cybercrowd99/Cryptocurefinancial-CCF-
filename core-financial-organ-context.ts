/**
 * CORE — Financial Organ Context
 *
 * The CORE Financial Organ Context defines bounded structural
 * awareness for the CCF financial organ.
 *
 * It does not:
 * - own financial information
 * - contain identity
 * - store accounts
 * - store balances
 * - record transactions
 * - become financial authority
 * - perform user profiling
 *
 * Context only:
 * - describes organ placement
 * - preserves structural awareness
 * - maintains constitutional separation
 * - provides neutral CORE coordination context
 */

import { CoreFinancialOrgan } from "./core-financial-organ-binding";

/**
 * CORE Financial Organ Context.
 */
export interface CoreFinancialOrganContext {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_CONTEXT";

  /**
   * Bound financial organ.
   */
  readonly organ: CoreFinancialOrgan;

  /**
   * Neutral context label.
   */
  readonly context: string;
}

/**
 * Create CORE financial context.
 *
 * Structural awareness only.
 */
export function createCoreFinancialOrganContext(
  organ: CoreFinancialOrgan,
  context: string
): CoreFinancialOrganContext {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_CONTEXT",
    organ,
    context,
  });
}
