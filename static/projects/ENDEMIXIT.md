::grid[![GoaT](/static/images/logo_ENDEMIXIT.png)]{item xs=4}

# ENDEMIXIT
Using five endangered Italian endemic species, Endemixit plans to produce five de novo genomes and re-sequence 20 individuals. Further information can be found at https://endemixit.com.

# Summary Data

## Tree representing ENDEMIXIT long list

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=endemixit" AND tax_rank="species" y="assembly_span>0" treeStyle="ring" taxonomy="ncbi" includeEstimates="true" collapseMonotypic ratio=2 disableModal="true" level="family,order,phylum" caption="Orange highlights represent clades with genomes already available. Tip taxa with available genomes are highlighted in green. Note that Ursus arctos arctos subspecies is here displayed as a target at the tip of the branch. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::
## ENDEMIXIT Contribution to Eukaryotic Genome Sequencing

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xInY" x="assembly_span AND long_list=ENDEMIXIT" rank="phylum,class,order,family,genus,species" y="long_list=ENDEMIXIT" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome assemblies available for taxa in the ENDEMIXIT wish list**, at different taxonomic ranks" item xs=4}

::report{report="xPerRank" x="long_list=ENDEMIXIT" caption="**Counts of taxa targeted by ENDEMIXIT**: All summary reports on GoaT are based on these counts" item xs=4}

::report{report="xInY" x="assembly_span>0 AND long_list=ENDEMIXIT" y="long_list=ENDEMIXIT" rank="species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Total of ENDEMIXIT target species with genome assemblies available on INSDC" item xs=4}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)