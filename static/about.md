<!--
Content to display at
-   /landing
-   /help/about -> created a file to serve as soft link in the folder /help. removing it seems to break the redirect to /about
-->

::breadcrumbs[About GoaT]

GoaT has been built using [GenomeHubs](https://github.com/genomehubs/genomehubs) to help coordinate efforts across the [Earth Biogenome Project](https://www.earthbiogenome.org) (EBP) Network at all stages from planning through sequencing and assembly to publication.

GoaT is described in our [announcement paper](https://wellcomeopenresearch.org/articles/8-24) in [Wellcome Open Research](https://wellcomeopenresearch.org):

::include{pageId=citation.md size=12 .inline}

From the abstract:

> As genomic data transform our understanding of biodiversity, the Earth BioGenome Project (EBP) has set a goal of generating reference quality genome assemblies for all ~1.9 million described eukaryotic taxa. Meeting this goal requires coordination among many individual regional and taxon-focussed projects working under the EBP umbrella. Large-scale sequencing projects require ready access to validated genome-relevant metadata, such as genome sizes and karyotypes, but these data are dispersed across the literature, and directly measured values are lacking for most taxa. To meet these needs, we have developed Genomes on a Tree (GoaT), an Elasticsearch-powered datastore and search index for genome-relevant metadata and sequencing project plans and statuses.

> GoaT indexes publicly available metadata for all eukaryotic species and interpolates missing values through phylogenetic comparison. GoaT also holds target priority and sequencing status information for many projects affiliated to the EBP to aid project coordination. Metadata and status attributes in GoaT can be queried through a mature API, a web front end, and a command line interface.

> GoaT currently holds direct or estimated values for over 70 taxon attributes and over 30 assembly attributes across 1.5 million eukaryotic species.

> The depth and breadth of curated data, frequent updates, and a versatile query interface make GoaT a powerful data aggregator and portal to explore and report underlying data for the eukaryotic tree of life.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Data sources

GoaT uses the [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) as the default backbone taxonomy (as it includes all taxa with sequence data), and adds synonyms from: [Open Tree of Life ](https://tree.opentreeoflife.org/opentree/opentree13.4@ott304358/Eukaryota), [GBIF](https://www.gbif.org/species/search), and [IRMNG](https://www.irmng.org/index.php).

Data are indexed for around 80 [taxon-level attributes](/types) (including, assembly statistics, genome sizes, and chromosome numbers), collated from [over 70 sources](/sources) ranging from major public databases to directly supplied project target lists. GoaT also includes data for [assembly](/types?result=assembly)- and [sample](/types?result=sample)-level attributes such as gene count and sample location.

GoaT produces summary reports of the sources included in any set of search results to encourage citation of the original data , e.g. the sources for a search of [chromosome numbers in the genus _Canis_](/search?query=tax_tree%28Canis%29%20AND%20chromosome_number&result=taxon&includeEstimates=false&summaryValues=count&taxonomy=ncbi&offset=0&fields=chromosome_number&names=&ranks=&report=sources) are:

:::grid{container direction="row" spacing="1" class="padded"}
::report{x="tax_tree(Canis) AND chromosome_number" fields="chromosome_number" report="sources" class="unpadded" size=12}
:::

## EBP Network progress reports

All projects that are part of the EBP Network are invited to share lists of target taxa and current sequencing status through GoaT to facilitate project coordination. Progress reports for the EBP overall and for individual projects are displayed on dedicated [project pages](/projects). If you have a project that you would like to see listed here, check out the [sumbissions page](/submissions) for detailed guidelines.

:::grid{container direction="row" spacing="1" class="padded"}
:::

## Annual reports

We produce an annual report highlighting key developments, uses and outreach over the preceeding 12 months

[GoaT Report | 2022](https://docs.google.com/document/d/1sUhMCZQUuQ8vYhTqrsbKEpB4lpZfpPPr5jDYFuIWPe8/edit#heading=h.j5pprs5ge9pk)

[GoaT Report | 2023](https://docs.google.com/document/d/1GLXEEsIHAh22k6jev0LKy9R9o9eTU7fhjoPlBvDv0zw/edit)
