# Genomes on a Tree (:hub)

:hub is built using GenomeHubs 2.0, to present genome-relevant metadata for **all Eukaryotic taxa** across the tree of life.

Metadata in GoaT include, genome assembly attributes, genome sizes, C values, and chromosome numbers from multiple sources.

**GoaT platform main goals**:

- Serve as a centralized source of genome-relevant metadata for the global community
- Operate as the sequencing tracking system for the Earth Biogenome Project Network

## How to use GoaT

1. Select your favorite taxon and play with the icons displayed under GoaTs search box

2. Use the **result columns** icon below the search box to select the metadata you would like to display for your search

3. Use the **query builder** icon and drop-down list to refine your query.

For detailed information on **how to use GoaT**, go to our [help page](/help).


# Explore Trees

Goat can display search results on trees and new queries can be made exploring pre-existing trees. 

**Examples of tree display** (ring and rectangle) of the same search results. 
Tap tree nodes to browse taxa or long-press to search:

:::grid{container direction=row spacing="1"}
::report{report="tree" x="tax_tree(Passeroidea) AND tax_depth(3) AND assembly_span" y="assembly_date>=2021" treeStyle="ring" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" ratio=1 disableModal="true" caption="Birds (Passeroidea) with available genomes, highlighting assemblies generated after 2021" item xs=4}

::report{report="tree" x="tax_tree(Passeroidea) AND tax_depth(3) AND assembly_span" y="assembly_date>=2021" treeStyle="rect" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" collapseMonotypic ratio=2 disableModal="true" caption="Birds (Passeroidea) with available genomes, highlighting assemblies generated after 2021" item xs=8}

:::grid{container direction="row" spacing="1" class="padded"}
:::
# Tree of all Eukaryotic Phyla on GoaT
Tap tree nodes to browse all attributes for a taxon or long-press to search and expand nodes:

:::grid{container direction=row spacing="1"}
::report{report="tree" x="tax_tree(Eukaryota) AND tax_rank(Phylum)" treeStyle="rect" taxonomy="ncbi" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" levels="species,genus,family" ratio=3 disableModal="true" caption="Tree of all INSDC Eukaryotic taxa" item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::
# Data summary

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span" rank="phylum,class,order,family,genus,species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Taxa with assemblies out of all INSDC Eukaryotic taxa" item xs=6}

::report{report="xPerRank" includeEstimates=true caption="Counts of all taxa with information on GoaT" item xs=6 }

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="chromosome_number>0" rank="Family" includeEstimates excludeAncestral="chromosome_number" excludeMissing="chromosome_number" caption="Total number of families with direct values of chromosome number" item xs=4}

::report{report="histogram" x="assembly_date" rank="species" cat="assembly_level" stacked="true" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" ratio=2 caption="Progress of genome assemblies published on INSDC over time, by assembly level" item xs=8}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_level=chromosome" y="assembly_span" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Contribution of chromosome-level assemblies to the total of species with available assemblies on INSDC" item xs=4}

::report{report="histogram" x="genome_size" rank="species" cat="kingdom" stacked="true" ratio=2 includeEstimates excludeAncestral="genome_size" excludeMissing="genome_size" caption="Frequency distribution of species genome sizes by kingdom" item xs=8}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::
