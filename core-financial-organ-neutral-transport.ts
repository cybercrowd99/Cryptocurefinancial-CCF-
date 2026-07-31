/**
 * CORE — Financial Organ Neutral Transport
 *
 * The CORE Financial Organ Neutral Transport defines bounded
 * structural movement for CORE financial organ artifacts.
 *
 * It does not:
 * - move money
 * - transfer ownership
 * - authorize transactions
 * - expose financial records
 * - identify people
 * - create identity relationships
 * - perform routing authority
 *
 * Neutral Transport only:
 * - preserves artifact movement state
 * - protects organ boundaries
 * - maintains neutral transfer conditions
 * - prevents semantic enrichment
 * - preserves sovereignty invariants
 */

import { CoreFinancialOrganEnvelope } from "./core-financial-organ-envelope";

/**
 * Structural transport states.
 */
export type CoreFinancialOrganTransportState =
  | "READY"
  | "TRANSFERRED"
  | "REJECTED";

/**
 * CORE transport artifact.
 */
export interface CoreFinancialOrganNeutralTransport {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_NEUTRAL_TRANSPORT";

  /**
   * Preserved envelope.
   */
  readonly envelope: CoreFinancialOrganEnvelope;

  /**
   * Transport condition.
   */
  readonly state: CoreFinancialOrganTransportState;
}

/**
 * Create neutral transport artifact.
 *
 * Structural movement only.
 */
export function createCoreFinancialOrganNeutralTransport(
  envelope: CoreFinancialOrganEnvelope
): CoreFinancialOrganNeutralTransport {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_NEUTRAL_TRANSPORT",
    envelope,
    state: "READY",
  });
}

/**
 * Transition transport state.
 *
 * No ownership or financial semantics.
 */
export function transitionCoreFinancialOrganNeutralTransport(
  transport: CoreFinancialOrganNeutralTransport,
  state: CoreFinancialOrganTransportState
): CoreFinancialOrganNeutralTransport {
  return Object.freeze({
    doctrine: transport.doctrine,
    status: transport.status,
    envelope: transport.envelope,
    state,
  });
}
