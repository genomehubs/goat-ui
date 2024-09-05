::grid[![GoaT](/static/images/ILEBP2.png)]{size=12}
:::grid{container direction="row" spacing="1" class="padded"}
:::

# Illinois EBP Pilot

**GoaT Search Term:** ILEBP

::grid[**The Illinois EBP Pilot Project** will sequence the genomes of agriculturally relevant insects for which little or no genomic data are available. Sequencing these focal taxa will demonstrate project scalability, communicate scientific discovery, and inspire potential economic and societal benefits. Currently, assemblies for all targets of Illinois EBP Pilot project have been produced and submited to insdc. Data will become publically available soon. For more information access https://mediaspace.illinois.edu/media/t/1_f7cpkins.]{size=8}

**Bioproject ID** PRJNA844590

**Main Contact**: [Christopher Dietrich](https://experts.illinois.edu/en/persons/christopher-h-dietrich), University of Illinois at Urbana Champaign, USA

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## ILEBP Long List

ILEBP long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=ILEBP
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=ILEBP bioproject=PRJNA844590 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## ILEBP Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=ILEBP bioproject=PRJNA844590 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=ILEBP .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=ILEBP bioproject=PRJNA844590 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=ILEBP bioproject=PRJNA844590 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# ILEBP Custom Reports

{{::include{pageId=/projects/reports/progress_tree.md project=ILEBP .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::}}

::include{pageId=/projects/reports/contiguity_scatters.md project=ILEBP bioproject=PRJNA844590 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Assemblies submitted to INSDC (green)

:::grid{container direction="row" spacing="1" size=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ILEBP" y="in_progress=ILEBP" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=4.6 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Taxa in the declared target list of the Illinois EBP Pilot Project.** Orange highlights represent clades with at least one genome submitted to INSDC under the Illinois EBP Bioproject Id PRJNA844590. Bars = assembly span. Tap tree nodes to browse taxa or long-press to search." size=12}
:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=ILEBP" rank="species" taxonomy="ncbi" result="taxon" cat="order[10]+" excludeAncestral="bioproject" excludeMissing="long_list" xOpts="ILEBP,,1,," caption="Number of species in each insect order targeted by Illinois EBP Pilot " size=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
