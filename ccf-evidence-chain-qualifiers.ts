/**
 * CCF — Evidence Chain Qualifiers
 *
 * The CCF Evidence Chain Qualifiers organ defines bounded
 * structural descriptors attached to evidence chain artifacts.
 *
 * It does not:
 * - store money
 * - represent transactions
 * - prove ownership
 * - identify people
 * - create financial history
 * - infer behavior
 * - create a ledger
 * - predict activity
 *
 * Qualifiers only:
 * - describe structural characteristics
 * - preserve artifact context
 * - provide neutral classification
 * - maintain CCF constitutional separation
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChain
} from "./ccf-evidence-chain";


/**
 * Structural qualifier types.
 *
 * These describe artifact properties only.
 */
export type CCFQualifierType =
  | "CATEGORY_BOUND"
  | "EVIDENCE_PRESENT"
  | "STRUCTURE_COMPLETE"
  | "NEUTRAL_ARTIFACT";


/**
 * Single structural qualifier.
 *
 * No semantic expansion.
 * No financial interpretation.
 */
export interface CCFEvidenceQualifier {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_QUALIFIER";

  /**
   * Qualifier classification.
   */
  type: CCFQualifierType;

  /**
   * Opaque qualifier marker.
   *
   * No identity meaning.
   * No financial meaning.
   */
  marker: string;
}


/**
 * Evidence Chain Qualifiers artifact.
 *
 * This is not a profile.
 * This is not metadata extraction.
 * This is not behavioral analysis.
 */
export interface CCFEvidenceChainQualifiers {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_QUALIFIERS";

  /**
   * Preserved chain reference.
   */
  chain: CCFEvidenceChain;

  /**
   * Structural qualifiers.
   */
  qualifiers: ReadonlyArray<CCFEvidenceQualifier>;
}


/**
 * Build a qualifier.
 *
 * Pure structural creation.
 */
export function createCCFEvidenceQualifier(
  type: CCFQualifierType,
  marker: string
): CCFEvidenceQualifier {

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_QUALIFIER",
    type,
    marker,
  });
}


/**
 * Attach qualifiers to evidence chain.
 *
 * No interpretation.
 * No enrichment.
 */
export function attachCCFEvidenceQualifiers(
  chain: CCFEvidenceChain,
  qualifiers: CCFEvidenceQualifier[]
): CCFEvidenceChainQualifiers {

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_QUALIFIERS",
    chain,
    qualifiers: Object.freeze([...qualifiers]),
  });
}
