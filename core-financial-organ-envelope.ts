/**
 * CORE — Financial Organ Envelope
 *
 * The CORE Financial Organ Envelope provides the bounded structural
 * wrapper used by CORE to transport the CCF financial organ.
 *
 * It does not:
 * - own financial data
 * - own identities
 * - own accounts
 * - own balances
 * - own transactions
 * - perform routing
 * - expose NET surfaces
 *
 * Envelope only:
 * - preserves organ integrity
 * - maintains constitutional attachment
 * - provides neutral CORE transport
 * - maintains sovereignty boundaries
 */

import { CoreFinancialOrgan } from "./core-financial-organ-binding";

/**
 * CORE Financial Organ Envelope.
 */
export interface CoreFinancialOrganEnvelope {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_ENVELOPE";

  /**
   * Opaque envelope identifier.
   */
  readonly envelopeId: string;

  /**
   * Wrapped CORE financial organ.
   */
  readonly organ: CoreFinancialOrgan;
}

/**
 * Build a CORE Financial Organ Envelope.
 *
 * Pure structural wrapping.
 */
export function createCoreFinancialOrganEnvelope(
  organ: CoreFinancialOrgan,
  envelopeId: string
): CoreFinancialOrganEnvelope {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_ENVELOPE",
    envelopeId,
    organ,
  });
}

/**
 * Inspect the wrapped CORE organ.
 *
 * Structural only.
 */
export function inspectCoreFinancialOrganEnvelope(
  envelope: CoreFinancialOrganEnvelope
): CoreFinancialOrgan {
  return envelope.organ;
}
