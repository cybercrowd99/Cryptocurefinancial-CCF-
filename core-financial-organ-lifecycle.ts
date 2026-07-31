/**
 * CORE — Financial Organ Lifecycle
 *
 * The CORE Financial Organ Lifecycle defines bounded structural
 * progression for the CCF financial organ binding.
 *
 * It does not:
 * - manage financial activity
 * - control accounts
 * - track balances
 * - record transactions
 * - own identity
 * - create user profiles
 * - become financial authority
 *
 * Lifecycle only:
 * - describes artifact condition
 * - preserves organ integrity
 * - maintains controlled progression
 * - preserves constitutional boundaries
 */

import { CoreFinancialOrgan } from "./core-financial-organ-binding";

/**
 * Lifecycle states describe artifact condition only.
 */
export type CoreFinancialOrganLifecycleState =
  | "CREATED"
  | "ACTIVE"
  | "SEALED"
  | "RETIRED";

/**
 * CORE Financial Organ Lifecycle artifact.
 */
export interface CoreFinancialOrganLifecycle {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CORE_FINANCIAL_ORGAN_LIFECYCLE";

  /**
   * Bound organ reference.
   */
  readonly organ: CoreFinancialOrgan;

  /**
   * Structural lifecycle state.
   */
  readonly state: CoreFinancialOrganLifecycleState;
}

/**
 * Create lifecycle artifact.
 *
 * Structural progression only.
 */
export function createCoreFinancialOrganLifecycle(
  organ: CoreFinancialOrgan,
  state: CoreFinancialOrganLifecycleState = "CREATED"
): CoreFinancialOrganLifecycle {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CORE_FINANCIAL_ORGAN_LIFECYCLE",
    organ,
    state,
  });
}

/**
 * Transition lifecycle state.
 *
 * No financial semantics.
 */
export function transitionCoreFinancialOrganLifecycle(
  lifecycle: CoreFinancialOrganLifecycle,
  state: CoreFinancialOrganLifecycleState
): CoreFinancialOrganLifecycle {
  return Object.freeze({
    doctrine: lifecycle.doctrine,
    status: lifecycle.status,
    organ: lifecycle.organ,
    state,
  });
}
