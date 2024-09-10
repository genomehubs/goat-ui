::grid[![GoaT](/static/images/VGP_logo.png)]{size=4}

# The Vertebrate Genomes Project (VGP)

**GoaT Search Term:** VGP

::grid[**VGP** aims to producing high-quality, accurate, annotated reference genomes for all [71,657](http://vgpdb.snu.ac.kr/splist/) living and named vertebrate species. Phase I of the project will generate over 260 near-gapless, chromosome-level and phased genome assemblies representing all extant vertebrate orders. For more information access the VGP's project page at https://vertebrategenomesproject.org]{size=8}

**Bioproject ID** PRJNA489243

**Main Contact**: Erich Jarvis, Rockefeller University, New York City via [VGP contact page](https://vertebrategenomesproject.org/contact-1)

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## VGP Long List

VGP long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=VGP
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree_family.md project=VGP bioproject=PRJNA489243 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## VGP Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=VGP bioproject=PRJNA489243 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=VGP .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=VGP bioproject=PRJNA489243 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=VGP bioproject=PRJNA489243 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# VGP Custom Reports

::include{pageId=/projects/reports/progress_tree_family.md project=VGP .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/contiguity_scatters.md project=VGP bioproject=PRJNA489243 .inline size=12}

:::grid{container direction="row" spacing="1" class="padded"}
:::

:::grid{container direction="row" spacing="1"}

```report
report: histogram
result: assembly
x: "qv_score AND bioproject=PRJNA489243"
cat: assembly_type
includeEstimates: false
xOpts: "20,80,30,,QV Scores"
stacked: True
caption: "Distribution of QV scores across VGP assemblies"
size: 6
```

```report
report: histogram
result: assembly
x: "qv_score AND bioproject=PRJNA489243"
cat: assembly_level
includeEstimates: false
xOpts: "20,80,30,,QV Scores"
stacked: True
caption: "Distribution of QV scores across VGP assemblies"
size: 6
```

:::

[back to projects](/projects)
