:::grid{container direction="row" spacing="1"}
::grid[![GoaT](/static/images/CNGB.png)]{size=3}
:::

# China National GenBank (CNGB)

**GoaT Search Term:** CNGB

**China National GeneBank** is one of the key science infrastructures in Shenzhen, approved and funded by the Chinese government. CNGB is committed to supporting public welfare, life science research, innovation and industry development, through effective bioresource conservation, digitalization and utilization.

China National GeneBank (CNGB) is owned by the government and operated independently by BGI-Research under the guidance and supervision of State High-Tech Industrial Innovation Center, Shenzhen (HIIC).

**Scope** CNGB data on GoaT correspond to genome assemblies (default assembly type: scaffold) that are openly accessible via https://db.cngb.org/. Many of those have not been submitted to INSDC. CNGB on GoaT is not a sequencing project, but a acronym used to collate the subset of **open** CNGBdb assemblies. For more information access the [CNGBdb website](https://db.cngb.org/about/).

**Bioproject ID** CNGB has not a Bioproject ID on GoaT

**Main Contact**: 

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Summary Data


## CNGB List

CNGB **cannot** be retrieved via long_list queries. 

To retrieve the full list of CNGB species on GoaT use the search terms:

- open=CNGB
- tax_rank(species)

## Tree representing eukaryotic taxa with genome assemblies on CNGBdb

:::grid{container direction="row" spacing="1" size=12}
::report{report="tree" x="tax_tree(Eukaryota) AND open=CNGB AND tax_rank(species)" y="assembly_span" treeStyle="rect" taxonomy="ncbi" levels="subspecies,species,genus,family,order,class,phylum" ratio=2 includeEstimates collapseMonotypic disableModal yOpts="10000,100000000000" caption="**Taxa with assemblies on CNGB**. Bars = assembly span estimates." size=12}
:::
Tap tree nodes to browse taxa or long-press to search.

[back to projects](/projects)
