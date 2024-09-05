::grid[![GoaT](/static/images/DToL_Logo_with_text.png)]{size=2}

# Darwin Tree of Life (DToL)

**GoaT Search Term:** DTOL

::grid[The Darwin Tree of Life project aims to sequence the genomes of all eukaryotic species in Britain and Ireland. For more information, access DToL's project page at https://www.darwintreeoflife.org.]{size=8}

**Bioproject ID** PRJEB40665

**Main Contact**: Darwin Tree of Life Project Management - contact@darwintreeoflife.org

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data

## DToL Long List

The Darwin Tree of Life long list (wishlist of all targets) includes all 75,000 eukaryotic species on the [United Kingdom Species Inventory](https://www.gbif.org/dataset/dbaa27eb-29e7-4cbb-8eab-3f689cfce116) published by the [Natural History Museum](https://www.nhm.ac.uk/our-science/data/uk-species.html).

To retrieve the list use the search terms:

- long_list=DTOL
- tax_rank(species)

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/target_tree_phylum.md project=DTOL bioproject=PRJEB40665 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

## DTOL Progress Reports

::include{pageId=/projects/reports/progress_by_rank.md project=DTOL bioproject=PRJEB40665 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_arcs.md project=DTOL .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

- DToL **sample_collected:** status updated daily from [NHM](https://data.nhm.ac.uk/), [COPO](https://copo-project.org) and from the Wellcome Sanger Institute internal Sample Tracking System (STS). Includes monthly updates retrieved from other DToL partners and taxon working groups

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/progress_histo.md project=DTOL bioproject=PRJEB40665 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

::include{pageId=/projects/reports/duplication.md project=DTOL bioproject=PRJEB40665 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

# DTOL Custom Reports

## Tree representing DToL target list highlighting phyla currently in progress in DToL pipeline (orange)

:::grid{container direction="row" spacing="1" size=12}
::report{report="tree" x="tax_tree(Eukaryota) AND long_list=DTOL AND tax_rank(Phylum)" y="assembly_span AND sequencing_status_dtol=in_progress" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="10000,100000000000" caption="**Phyla in the declared target list of DToL.** Orange highlights represent clades with at least one genome available under the DToL BioProject ID PRJEB40665. Bars = assembly span estimates." size=12}
:::
Tap tree nodes to browse taxa or long-press to search.

:::grid{container direction="row" spacing="1" class="padded"}
:::
::include{pageId=/projects/reports/contiguity_scatters.md project=DTOL bioproject=PRJEB40665 .inline}

:::grid{container direction="row" spacing="1" class="padded"}
:::

[back to projects](/projects)
