/**
 * CCF — Evidence Chain Dewey Map
 *
 * The CCF Evidence Chain Dewey Map provides structural organization
 * for evidence chain artifacts.
 *
 * It does not:
 * - store money
 * - represent transactions
 * - identify people
 * - prove ownership
 * - create financial history
 * - correlate behavior
 * - create a ledger
 * - predict activity
 *
 * Dewey Map only:
 * - organizes artifact location
 * - preserves structural classification
 * - provides neutral repository navigation
 * - maintains CCF constitutional separation
 *
 * Attached Doctrine:
 * ede447d
 */

import {
  CCFEvidenceChain
} from "./ccf-evidence-chain";


/**
 * Dewey classification node.
 *
 * Structural organization only.
 */
export interface CCFDeweyNode {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_DEWEY_NODE";

  /**
   * Structural classification path.
   *
   * No semantic ownership.
   */
  path: string;

  /**
   * Neutral label.
   */
  label: string;
}


/**
 * Evidence Chain Dewey Map.
 *
 * This is a repository map,
 * not an identity map.
 */
export interface CCFEvidenceChainDeweyMap {

  /**
   * Constitutional attachment.
   */
  doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  status: "CCF_EVIDENCE_CHAIN_DEWEY_MAP";

  /**
   * Preserved evidence chain reference.
   */
  chain: CCFEvidenceChain;

  /**
   * Structural map nodes.
   */
  nodes: ReadonlyArray<CCFDeweyNode>;
}


/**
 * Create Dewey classification node.
 *
 * Pure structural organization.
 */
export function createCCFDeweyNode(
  path: string,
  label: string
): CCFDeweyNode {

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_DEWEY_NODE",
    path,
    label,
  });
}


/**
 * Attach Dewey map to evidence chain.
 *
 * No interpretation.
 * No enrichment.
 */
export function createCCFEvidenceChainDeweyMap(
  chain: CCFEvidenceChain,
  nodes: CCFDeweyNode[]
): CCFEvidenceChainDeweyMap {

  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_CHAIN_DEWEY_MAP",
    chain,
    nodes: Object.freeze([...nodes]),
  });
}


/**
 * Inspect Dewey map structure.
 *
 * Returns organization only.
 */
export function inspectCCFEvidenceChainDeweyMap(
  map: CCFEvidenceChainDeweyMap
) {
  return {
    doctrine: map.doctrine,
    status: map.status,
    nodeCount: map.nodes.length,
  };
}
