::grid[![GoaT](/static/images/logo_ENDEMIXIT.png)]{size=4}

# ENDEMIXIT

**GoaT Search Term:** ENDEMIXIT

**Scope:** Genome assembly and population genomics

::grid[Using five endangered Italian endemic species, Endemixit plans to produce five de novo genomes and re-sequence 20 individuals. Further information can be found at https://endemixit.com.]{size=8}

**Bioproject ID** PRJNA712951

**Main Contact**: [Endemixit Project Management](https://endemixit.com/contact-2/)

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## ENDEMIXIT Long List

ENDEMIXIT long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=ENDEMIXIT
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=ENDEMIXIT bioproject=PRJNA712951 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## ENDEMIXIT Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=ENDEMIXIT bioproject=PRJNA712951 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=ENDEMIXIT .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=ENDEMIXIT bioproject=PRJNA712951 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=ENDEMIXIT bioproject=PRJNA712951 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ENDEMIXIT Custom Reports

## Tree representing the declared target list of ENDEMIXIT, highlighting species with available assemblies (green)

:::grid{container direction=row}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=endemixit" y="assembly_span AND bioproject=PRJNA712951" treeStyle="ring" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=6 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the ENDEMIXIT.** Orange highlights represent clades with at least one genome available under the ENDEMIXIT Bioproject Id PRJNA712951. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." size=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/contiguity_scatters.md project=ENDEMIXIT bioproject=PRJNA712951 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
