::grid[![GoaT](/static/images/zoonomia-logo.svg)]{size=2}

:::grid{container direction="row" spacing="1" class="padded"}
:::
**GoaT Search Term:** ZOONOMIA

::grid[**The Zoonomia Consortium** (200 Mammals) is investigating the genomics of shared and specialized traits in eutherian mammals. Zoonomia is prioritizing phylogenetic diversity and making data available quickly and without restriction with the goal to support biological discovery, medical research and the conservation of biodiversity. For more information access https://zoonomiaproject.org/.]{size=8}

**Bioproject ID** PRJNA312960

**Main Contact**: wordpress@zoonomiaproject.org

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## ZOONOMIA Long List

ZOONOMIA long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=ZOONOMIA
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=ZOONOMIA bioproject=PRJNA312960 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## ZOONOMIA Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=ZOONOMIA bioproject=PRJNA312960 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=ZOONOMIA .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=ZOONOMIA bioproject=PRJNA312960 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=ZOONOMIA bioproject=PRJNA312960 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ZOONOMIA Custom Reports

### Tree representing species for which Zoonomia has generated assemblies (grees)

:::grid{container direction="row" spacing="1" size=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ZOONOMIA AND tax_rank(species)" y="assembly_span AND bioproject=PRJNA312960,PRJNA12590" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing species for which Zoonomia has generated assemblies.** Orange highlights represent clades with at least one genome already available under the Bioproject ID PRJNA312960 (plus PRJNA12590 for Echinops telfairi). Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." size=12}
:::
::include{pageId=/projects/reports/contiguity_scatters.md project=ZOONOMIA bioproject=PRJNA312960 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Zoonomia Publications and Resources

- [Nature Description Paper](https://www.nature.com/articles/s41586-020-2876-6)
- [Description of Alignment Methods](https://www.nature.com/articles/s41586-020-2871-y)
- [Downloadable Zoonomia data](https://cglgenomics.ucsc.edu/data/cactus/)
- [200 Mammals variant data](https://www.broadinstitute.org/200-mammals-variant-data)

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Mammals sequenced by Zoonomia

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="bioproject=PRJNA312960" rank="species" taxonomy="ncbi" result="taxon" cat="order[12]+" excludeAncestral="bioproject" excludeMissing="bioproject" xOpts="PRJNA312960,,1,," caption="Number of species in each mammalian order (from ncbi taxonomy) sequenced by Zoonomia" size=8}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
