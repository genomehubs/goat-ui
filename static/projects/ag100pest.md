:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/i5k.png)]{item xs=1}
::grid[![GoaT](/static/images/USDA.png)]{item xs=3}
:::


# Ag100Pest Initiative (Ag100Pest)

**GoaT Search Term:** AG100PEST

::grid[**Ag100Pest** aims to produce annotated, reference quality genome assemblies for the top 100 US arthropod agricultural pests. When possible, generate the PacBio long-read data from a single individual. For more information access the Ag100Pest's project page at http://i5k.github.io/ag100pest]{item xs=8}

**Bioproject ID** PRJNA555319

**Main Contact**: i5k(at)ars.usda.gov

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## {{Project}} Long List

Ag100Pest long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list=Ag100Pest
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project=Ag100Pest bioproject=PRJNA555319 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Progress Reports for the Ag100Pest Project

::include{pageId=/projects/reports/progress_by_rank.md project=AG100PEST bioproject=PRJNA555319 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=AG100PEST .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

{{::include{pageId=/projects/reports/progress_histo.md project=AG100PEST bioproject=PRJNA555319 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::}}

::include{pageId=/projects/reports/duplication.md project=AG100PEST bioproject=PRJNA555319 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# {{PROJECT Custom Reports}}

::include{pageId=/projects/reports/progress_tree.md project=AG100PEST .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/contiguity_scatters.md project=AG100PEST bioproject=PRJNA555319 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing Status of Ag100Pest Species

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="long_list=AG100PEST AND sequencing_status_ag100pest" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_ag100pest=sample_collected@collected,sample_acquired@acquired,in_progress@in_progress,insdc_open@insdc" excludeAncestral="long_list" excludeMissing="long_list" xOpts=";;1;;Sequencing Status" caption="Current sequencing status of Ag100Pest targets" item xs=6}


:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
