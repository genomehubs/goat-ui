:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/capra3.png)]{item xs=3}
:::

# {{PROJECT}}

**GoaT Search Term:** {{project}}

::grid[**{{project}}** short description For more information reach the contact info below.]{item xs=8}

**Bioproject ID** {{bioproject}}

**Main Contact**:

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## {{Project}} Long List

{{Project}} long_list correspond to the subset of species declared as targets by the project. To retrieve the list use the search terms:

- long_list={{project}}
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree.md project={{project}} bioproject={{bioproject}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## {{project}} Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project={{project}} bioproject={{bioproject}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project={{project}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

{{::include{pageId=/projects/reports/progress_histo.md project={{project}} bioproject={{bioproject}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::}}

::include{pageId=/projects/reports/duplication.md project={{project}} bioproject={{project}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# {{PROJECT Custom Reports}}

::include{pageId=/projects/reports/progress_tree.md project={{project}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/contiguity_scatters.md project={{project}} bioproject={{project}} .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
