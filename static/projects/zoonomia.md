
::grid[![GoaT](/static/images/zoonomia-logo.svg)]{item xs=2}


:::grid{container direction="row" spacing="1" class="padded"}
:::
**GoaT Search Term:** ZOONOMIA


::grid[**The Zoonomia Consortium** (200 Mammals) is investigating the genomics of shared and specialized traits in eutherian mammals. Zoonomia is prioritizing phylogenetic diversity and making data available quickly and without restriction with the goal to support biological discovery, medical research and the conservation of biodiversity. For more information access https://zoonomiaproject.org/.]{item xs=8}

**Bioproject ID** PRJNA312960

**Main Contact**: wordpress@zoonomiaproject.org


:::grid{container direction="row" spacing="1" class="padded"}
:::
# Summary Data

## Tree representing species for which Zoonomia has generated assemblies

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="tree" x="tax_tree(Eukaryota) AND long_list=ZOONOMIA AND tax_rank(species)" y="assembly_span AND bioproject=PRJNA312960,PRJNA12590" treeStyle="rect" taxonomy="ncbi" levels=",subspecies,species,genus,family,order,class,phylum" includeEstimates="true" ratio=2 disableModal collapseMonotypic yOpts="1000000,100000000000" caption="**Tree representing species for which Zoonomia has generated assemblies.** Orange highlights represent clades with at least one genome already available under the Bioproject ID PRJNA312960 (plus PRJNA12590 for Echinops telfairi). Species with available assemblies are highlighted in green. Tap tree nodes to browse taxa or long-press to search." item xs=12}
:::


:::grid{container direction="row" spacing="1" class="padded"}
:::


## Zoonomia Publications and Resources

- [Nature Description Paper](https://www.nature.com/articles/s41586-020-2876-6)
- [Description of Alignment Methods](https://www.nature.com/articles/s41586-020-2871-y)
- [Downloadable Zoonomia data](https://cglgenomics.ucsc.edu/data/cactus/)
- [200 Mammals variant data](https://www.broadinstitute.org/200-mammals-variant-data)

:::grid{container direction="row" spacing="1" class="padded"}
:::
## Zoonomia Progress Reports
### Progress of Genome Sequencing by Taxon Rank
:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA312960,PRJNA12590" rank="class,order,family,genus,species" y="long_list=ZOONOMIA" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="**Genome Sequencing of Zoonomia Targets:** Genome assemblies under Bioproject ID PRJNA312960 (plus PRJNA12590 for Echinops telfairi), at different taxonomic ranks" item xs=6}

::report{report="xPerRank" x="long_list=ZOONOMIA" rank="class,order,family,genus,species" includeEstimates=true caption="**Counts of taxa targeted by the Zoonomia Project**: All summary reports on GoaT are based on these counts" item xs=6}

:::

:::grid{container direction="row" spacing="1" class="padded"}
:::

### Mammals sequenced by Zoonomia

:::grid{container direction="row" spacing="1"}

::report{report="histogram" x="bioproject=PRJNA312960" rank="species" taxonomy="ncbi" result="taxon" cat="order[10]+" excludeAncestral="bioproject" excludeMissing="bioproject" xOpts="PRJNA312960,,1,," caption="Number of species in each mammalian order (from ncbi taxonomy) sequenced by Zoonomia" item xs=6}


::report{report="histogram" x="sequencing_status_zoonomia" rank="species" taxonomy="ncbi" result="taxon" cat="sequencing_status_zoonomia=sample_collected,sample_acquired,in_progress,insdc_open" excludeAncestral="long_list" excludeMissing="long_list" xOpts=",,1,,Sequencing Status" caption="Current sequencing status of Zoonomia targets" item xs=6}

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::



[back to projects](/projects)
