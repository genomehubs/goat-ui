
:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/ERGA-CH-logo.png)]{item xs=3}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ERGA-CH - The Swiss node of the European Reference Genome Atlas (ERGA) initiative
**GoaT Search Term:** ERGA-CH


::grid[**ERGA-CH** is the Swiss node of the European Reference Genome Atlas initiative. ERGA-CH is coordinating national sampling, sequencing, and assembly efforts to contribute to reference genome generation as part of the ERGA community. For more information reach the contact info below.]{item xs=8}

**Bioproject ID** PRJEB49197

**Main Contact**: switzerland(at)erga-biodiversity.eu

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data
## ERGA-CH Long List

ERGA-CH long_list correspond to the subset of Swiss species declared as targets by the project. To retrieve the list use the search terms:
- long_list=erga-ch
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Tree representing the declared target list of ERGA-CH, highlighting species with available assemblies (green)

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-CH" y="assembly_span AND bioproject=PRJEB49197" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3.5 disableModal collapseMonotypic yOpts="10000000,7000000000,,linear" caption="**Taxa in the declared target list of the ERGA-CH project.** Orange highlights represent clades with at least one genome available under the ERGA-CH Bioproject Id PRJEB49197. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::

## ERGA-CH Progress Reports
### Progress of Eukaryotic Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJEB49197" rank="phylum,class,order,family,genus,species" y="long_list=erga-ch" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of ERGA-CH Targets:** Genome assemblies under Bioproject ID PRJEB49197, at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ERGA-CH" includeEstimates=true caption="**Counts of taxa targeted by ERGA-CH**: All summary reports on GoaT are based on these counts" item xs=6}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of ERGA-CH Species

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="sample_collected=ERGA-CH" y="long_list=ERGA-CH" rank="species" includeEstimates excludeAncestral="sample_collected" excludeMissing="sample_collected" caption="Total of ERGA-CH target species collected" item xs=6}

::report{report="xInY" x="in_progress=ERGA-CH" y="long_list=ERGA-CH" rank="species" includeEstimates=true excludeAncestral="in_progress" excludeMissing="in_progress" caption="Total of ERGA-CH target species with genome sequencing currently in progress" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

### Tree representing ERGA-CH target list highlighting species currently in progress

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ERGA-CH" y="in_progress=ERGA-CH" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=3.5 includeEstimates collapseMonotypic disableModal yOpts="1000000,100000000000" caption="**Tree of species in the ERGA-CH long list.** Orange highlights represent clades with at least one descendant species in progress in the ERGA-CH pipeline. Species in progress are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::


[back to projects](/projects)
