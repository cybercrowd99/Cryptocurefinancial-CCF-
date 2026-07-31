/**
 * CCF — Evidence Chain
 *
 * The CCF Evidence Chain represents structural evidence that a
 * financial-category-related event occurred, without becoming a
 * financial ledger, account system, or identity-bearing artifact.
 *
 * It does not:
 * - store money
 * - track balances
 * - record transactions
 * - infer ownership
 * - extract identity
 * - correlate behavior
 * - predict financial activity
 *
 * EvidenceChain only:
 * - represents structural evidence
 * - preserves category relationships
 * - attaches to the CCF constitutional doctrine (ede447d)
 * - maintains sovereignty and non-PII invariants
 */

import { CCFCategoryId } from "./ccf-financial-repository";
import { NeutralEnvelope } from "../uidl/neutral-envelope";

/**
 * Evidence primitives.
 *
 * These are structural-only descriptors.
 * They do not contain financial data or identity.
 */
export type CCFEvidenceType =
  | "SERVICE"
  | "CAPABILITY"
  | "COMPLETION"
  | "STRUCTURAL";

/**
 * A single evidence node.
 *
 * This is not a transaction.
 * This is not a ledger entry.
 * This is not ownership proof.
 */
export interface CCFEvidenceNode {
  doctrine: "CCF_Constitution_Attachment";

  status: "CCF_EVIDENCE_NODE";

  categoryId: CCFCategoryId;

  evidenceType: CCFEvidenceType;

  envelope: NeutralEnvelope;

  marker: string;
}

/**
 * Evidence Chain — structural sequence only.
 *
 * Not a timeline.
 * Not a history.
 * Not a ledger.
 */
export interface CCFEvidenceChain {
  doctrine: "CCF_EvidenceChain";

  status: "CCF_EVIDENCE_CHAIN";

  nodes: ReadonlyArray<CCFEvidenceNode>;
}

/**
 * Build a CCF Evidence Node.
 *
 * Pure structural creation.
 * No financial semantics.
 * No identity semantics.
 */
export function buildEvidenceNode(
  categoryId: CCFCategoryId,
  evidenceType: CCFEvidenceType,
  envelope: NeutralEnvelope,
  marker: string
): CCFEvidenceNode {
  const node: CCFEvidenceNode = {
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_NODE",
    categoryId,
    evidenceType,
    envelope,
    marker,
  };

  return Object.freeze(node);
}

/**
 * Build a CCF Evidence Chain.
 *
 * Immutable structural sequence.
 * Not a ledger.
 * Not financial history.
 */
export function buildEvidenceChain(
  nodes: CCFEvidenceNode[]
): CCFEvidenceChain {
  const chain: CCFEvidenceChain = {
    doctrine: "CCF_EvidenceChain",
    status: "CCF_EVIDENCE_CHAIN",
    nodes: Object.freeze([...nodes]),
  };

  return Object.freeze(chain);
}
