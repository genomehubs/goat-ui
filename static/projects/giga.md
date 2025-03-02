::grid[![GoaT](/static/images/GIGA.jpeg)]{size=2}

# Global Invertebrate Genomics Alliance (GIGA)

**GoaT Search Term:** GIGA

::grid[**GIGA** is building a network of scientists to tackle challenges associated with genome and transcriptome sequencing and promote standards that will facilitate comparative approaches to invertebrate genomics. For more information access GIGA's project page at http://www.gigacos.org/]{size=8}

**Bioproject ID** PRJNA649812
::grid[ ]{size=6}

**Main Contact**: [Joe Lopez](joslo@nova.edu) or [GIGA Governing Board](http://www.gigacos.org/index.php/contact/)

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## GIGA Long List

GIGA long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=GIGA
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=GIGA bioproject=PRJNA649812 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## GIGA Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=GIGA bioproject=PRJNA649812 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=GIGA .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=GIGA bioproject=PRJNA649812 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=GIGA bioproject=PRJNA649812 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# GIGA Custom Reports

{{::include{pageId=/projects/reports/progress_tree.md project=GIGA .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::}}

::include{pageId=/projects/reports/contiguity_scatters.md project=GIGA bioproject=PRJNA649812 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{size=23}
::grid[The data displayed below originated from a manual compilation. GIGA assemblies will be linked to the umbrella Bioproject ID PRJNA649812. Please [contact GIGA](joslo@nova.edu) if you wish to submit genomes under GIGA umbrella.]{size=6}
:::

## Tree representing species sequenced under GIGA umbrella (green)

:::grid{container direction="row" spacing="1" size=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=GIGA AND tax_rank(species)" y="assembly_span AND sequencing_status_giga>=insdc_open" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Species with assemblies generated by GIGA.** Orange highlights represent clades with at least one genome available. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." size=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

## GIGA Progress Reports

### Progress of Genome Sequencing by Taxon Rank

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND sequencing_status_giga>=insdc_open" rank="phylum,class,order,family,genus,species" y="long_list=GIGA" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of GIGA taxa:** Genome assemblies belonging to the GIGA umbrella, at different taxonomic ranks" size=6}

::report{report="xPerRank" x="long_list=GIGA" rank="kingdom,phylum,class,order,family,genus,species,subspecies" includeEstimates=true caption="**Counts of taxa under the GIGA Project**: All summary reports on GoaT are based on these counts" size=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Taxa sequenced by GIGA

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="insdc_open=GIGA" rank="species" taxonomy="ncbi" result="taxon" cat="phylum[10]+" excludeAncestral="sequencing_status_giga" excludeMissing="sequencing_status_giga" xOpts=",,1,," caption="Number of species in diferent invertebrate phyla (from ncbi taxonomy) sequenced by GIGA. Click on histogram to expand and search" size=6}

::report{report="histogram" x="insdc_open=GIGA" rank="species" taxonomy="ncbi" result="taxon" cat="assembly_level" excludeAncestral="sequencing_status_giga" excludeMissing="sequencing_status_giga" xOpts=",,1,," caption="Distribution of assembly level available for GIGA species. Click on histogram to expand and search" size=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
