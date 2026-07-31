/**
 * CCF — Evidence Chain Lifecycle
 *
 * The CCF Evidence Chain Lifecycle defines structural lifecycle
 * transitions for evidence chain artifacts.
 *
 * It does not:
 * - create financial records
 * - create ownership claims
 * - create identity records
 * - create transaction history
 * - modify evidence meaning
 * - evaluate financial activity
 *
 * Lifecycle only:
 * - initializes structural existence
 * - preserves chain state transitions
 * - records bounded artifact progression
 * - maintains CCF constitutional separation
 *
 * Attached doctrine:
 * ede447d — CryptoCureFinancial Organ Doctrine
 */

import { CCFEvidenceChain } from "./ccf-evidence-chain";

/**
 * Lifecycle states.
 *
 * These describe artifact condition only.
 * They do not describe financial events.
 */
export type CCFEvidenceLifecycleState =
  | "CREATED"
  | "ACTIVE"
  | "SEALED"
  | "RETIRED";

/**
 * Lifecycle envelope for a CCF Evidence Chain.
 *
 * This is structural metadata only.
 */
export interface CCFEvidenceChainLifecycle {
  doctrine: "CCF_EvidenceChain_Lifecycle_Attachment";

  status: "CCF_EVIDENCE_CHAIN_LIFECYCLE";

  state: CCFEvidenceLifecycleState;

  chain: CCFEvidenceChain;

  createdAt: string;

  updatedAt: string;
}

/**
 * Create a lifecycle wrapper around an evidence chain.
 *
 * Creation does not create evidence.
 * It only establishes lifecycle presence.
 */
export function createEvidenceChainLifecycle(
  chain: CCFEvidenceChain
): CCFEvidenceChainLifecycle {
  const now = new Date().toISOString();

  return Object.freeze({
    doctrine: "CCF_EvidenceChain_Lifecycle_Attachment",

    status: "CCF_EVIDENCE_CHAIN_LIFECYCLE",

    state: "CREATED",

    chain,

    createdAt: now,

    updatedAt: now,
  });
}

/**
 * Activate a chain lifecycle.
 *
 * Activation does not authorize ownership,
 * identity, or financial interpretation.
 */
export function activateEvidenceChainLifecycle(
  lifecycle: CCFEvidenceChainLifecycle
): CCFEvidenceChainLifecycle {
  return Object.freeze({
    ...lifecycle,
    state: "ACTIVE",
    updatedAt: new Date().toISOString(),
  });
}

/**
 * Seal an evidence chain lifecycle.
 *
 * Sealing preserves the artifact state.
 * It does not create historical accounting.
 */
export function sealEvidenceChainLifecycle(
  lifecycle: CCFEvidenceChainLifecycle
): CCFEvidenceChainLifecycle {
  return Object.freeze({
    ...lifecycle,
    state: "SEALED",
    updatedAt: new Date().toISOString(),
  });
}

/**
 * Retire an evidence chain lifecycle.
 *
 * Retirement ends lifecycle activity.
 * It does not delete constitutional structure.
 */
export function retireEvidenceChainLifecycle(
  lifecycle: CCFEvidenceChainLifecycle
): CCFEvidenceChainLifecycle {
  return Object.freeze({
    ...lifecycle,
    state: "RETIRED",
    updatedAt: new Date().toISOString(),
  });
}
