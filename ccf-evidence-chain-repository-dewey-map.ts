/**
 * CCF — Evidence Chain Repository Dewey Map
 *
 * The CCF Evidence Chain Repository Dewey Map provides bounded
 * structural organization for repository artifacts.
 *
 * It does not:
 * - store money
 * - represent ownership
 * - identify people
 * - record transactions
 * - create financial history
 * - infer behavior
 * - become a ledger
 * - predict financial activity
 *
 * Dewey Map only:
 * - classifies repository structure
 * - preserves neutral organization
 * - maintains constitutional separation
 * - preserves non-PII sovereignty invariants
 */

import { CCFEvidenceChainRepository } from "./ccf-evidence-chain-repository";

/**
 * Structural Dewey node.
 */
export interface CCFRepositoryDeweyNode {
  /**
   * Opaque structural path.
   */
  readonly path: string;

  /**
   * Neutral structural label.
   */
  readonly label: string;
}

/**
 * Repository Dewey Map artifact.
 */
export interface CCFEvidenceChainRepositoryDeweyMap {
  /**
   * Constitutional attachment.
   */
  readonly doctrine: "CCF_Constitution_Attachment";

  /**
   * Artifact discriminator.
   */
  readonly status: "CCF_EVIDENCE_REPOSITORY_DEWEY_MAP";

  /**
   * Repository reference.
   */
  readonly repository: CCFEvidenceChainRepository;

  /**
   * Structural classification nodes.
   */
  readonly nodes: ReadonlyArray<CCFRepositoryDeweyNode>;
}

/**
 * Build Repository Dewey Map.
 *
 * Pure structural organization.
 */
export function buildCCFEvidenceChainRepositoryDeweyMap(
  repository: CCFEvidenceChainRepository,
  nodes: ReadonlyArray<CCFRepositoryDeweyNode>
): CCFEvidenceChainRepositoryDeweyMap {
  return Object.freeze({
    doctrine: "CCF_Constitution_Attachment",
    status: "CCF_EVIDENCE_REPOSITORY_DEWEY_MAP",
    repository,
    nodes: Object.freeze([...nodes]),
  });
}
