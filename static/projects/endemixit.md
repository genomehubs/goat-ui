::grid[![GoaT](/static/images/logo_ENDEMIXIT.png)]{item xs=4}

# ENDEMIXIT
**GoaT Search Term:** ENDEMIXIT

::grid[Using five endangered Italian endemic species, Endemixit plans to produce five de novo genomes and re-sequence 20 individuals. Further information can be found at https://endemixit.com.]{item xs=8}

**Bioproject ID** PRJNA712951

::grid[ ]{item xs=6}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## Tree representing the declared target list of ENDEMIXIT, highlighting species with available assemblies (green)

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=endemixit" y="assembly_span AND bioproject=PRJNA712951" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=6 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the ENDEMIXIT.** Orange highlights represent clades with at least one genome available under the ENDEMIXIT Bioproject Id PRJNA712951. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::
## ENDEMIXIT Progress Reports
### Progress of Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA712951" rank="phylum,class,order,family,genus,species" y="long_list=ENDEMIXIT" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome assemblies available for taxa in the ENDEMIXIT wish list:**Genome assemblies under Bioproject ID PRJNA712951, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ENDEMIXIT" includeEstimates=true caption="**Counts of taxa targeted by ENDEMIXIT**: All summary reports on GoaT are based on these counts" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

## Species in Progress by ENDEMIXIT

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=endemixit" AND tax_rank="species" y="in_progress=ENDEMIXIT" treeStyle="ring" taxonomy="ncbi" includeEstimates="true" collapseMonotypic ratio=2 disableModal="true" level="subspecies,species,genus,family,order,phylum" caption="**Taxa in the declared target list of the ENDEMIXIT.** Orange highlights represent clades with at least one descendant species in progress in the ENDEMIXIT pipeline. Species in progress are highlighted in green. Note that Ursus arctos, subspecies arctos  is here displayed as a target at the tip of the branch. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
