# Data Freeze
::grid[![GoaT](/static/images/VGP_logo.png)]{size=4}

# The Vertebrate Genomes Project (VGP) Phase 1

::grid[**VGP** aims to produce high-quality, accurate, annotated reference genomes for all [71,657](http://vgpdb.snu.ac.kr/splist/) living and named vertebrate species. Phase I of the project has produced their first data freeze in August 2025, which included over 500 high-quality genome assemblies of representatives of most extant vertebrate orders. For more information access the VGP's project page at https://vertebrategenomesproject.org. See current VGP progress on [GoaT-VGP](/projects/VGP) page.]{size=12}

**Main Contact**: Erich Jarvis, Rockefeller University, New York City via [VGP contact page](https://vertebrategenomesproject.org/contact-1)


**VGP Phase 1 Data Sets on GoaT:**
- [All data](/search?query=data_freeze%3Dvgp_phase1_%2A&result=assembly&includeEstimates=true&taxonomy=ncbi&offset=0&fields=assembly_level%2Cdata_freeze&size=100#data_freeze%3Dvgp_phase1_*): all assemblies across datasets
- [vgp_phase1_main](/search?query=data_freeze%3Dvgp_phase1_main&result=assembly&offset=0&includeEstimates=true&taxonomy=ncbi&size=100#data_freeze%3Dvgp_phase1_main): primary assemblies
- [vgp_phase1_alt](/search?query=data_freeze%3Dvgp_phase1_alt&result=assembly&fields=assembly_span%2Ccontig_n50%2Cscaffold_n50%2Cassembly_level%2Cdata_freeze&includeEstimates=true&taxonomy=ncbi&size=100&offset=0#data_freeze%3Dvgp_phase1_alt): secondary assemblies
- [vgp_phase1_aux](/search?query=data_freeze%3Dvgp_phase1_aux&result=assembly&fields=assembly_span%2Ccontig_n50%2Cscaffold_n50%2Cassembly_level%2Cdata_freeze&includeEstimates=true&taxonomy=ncbi&size=100&offset=0#data_freeze%3Dvgp_phase1_aux): auxiliary assemblies
- [vgp_phase1_comp_vgp](/search?query=data_freeze%3Dvgp_phase1_comp_vgp&result=assembly&fields=assembly_span%2Ccontig_n50%2Cscaffold_n50%2Cassembly_level%2Cdata_freeze&includeEstimates=true&taxonomy=ncbi&size=100&offset=0#data_freeze%3Dvgp_phase1_comp_vgp): subset of primary VGP assemblies used in comparative analyses
- [vgp_phase1_comp_external](/search?query=data_freeze%3Dvgp_phase1_comp_external&result=assembly&fields=assembly_span%2Ccontig_n50%2Cscaffold_n50%2Cassembly_level%2Cdata_freeze&includeEstimates=true&taxonomy=ncbi&size=100&offset=0#data_freeze%3Dvgp_phase1_comp_external): subset of non-VGP assemblies used in comparative analyses


**Other Resources**:

- VGP Phase 1 GitHub: https://github.com/VGP/vgp-phase1 
- UCSC Hub for VGP assemblies: https://hgdownload.soe.ucsc.edu/hubs/VGP/

:::grid{container direction="row" spacing="1" class="padded"}
:::

# Querying VGP data freeze on GoaT

:::grid{container size=12 spacing=2}

::iframe{size=4 aspectRatio=16/9 src="https://www.youtube-nocookie.com/embed/ZExCKGztdTU?si=BHFnwUMU0RIBRbrx" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen}

::iframe{size=4 aspectRatio=16/9  src="https://www.youtube.com/embed/v2hSuUNljSg?si=n6GyW_qs_1NEn9hE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen}

:::

[GoaT-VGP playlist](https://www.youtube.com/playlist?list=PLiPQcLZjjaAU4ubukpEqkDUS9Hg6QrbSV) is currently under construction. Help us improve and Request tutorials [here](https://github.com/genomehubs/goat-data/issues/new?template=tutorial_request.yaml)


# Summary Data

See examples of reports available for VGP Phase1 assembly sets. Explore the data in the reports by selecting bins or data points. Edit reports using the edit button and playing with the report fields.

### VGP Phase 1 Primary Assembly Sequencing Reports

:::grid{container direction="row" spacing="1" size=12}


```report
report: tree
x: assembly_span and data_freeze=vgp_phase1_main
y: assembly_span
cat: class
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: class
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
caption: "**Assembly span across VGP Phase 1 primary assemblies**. Colours correspond to taxon classes"
size: 6
```

```report
report: tree
x: scaffold_n50 and data_freeze=vgp_phase1_main
y: scaffold_n50
cat: class
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: class
treeStyle: ring
treeThreshold: 2000
pointSize: 10
result: assembly
caption: "**Scaffold N50 across VGP Phase 1 primary assemblies**. Colours correspond to taxon classes."
size: 6
```

:::grid{container direction="row" spacing="1"}

:::

## Contiguity assessment of VGP Phase 1 Assemblies

:::grid{container direction="row" spacing="1"}

```report
report: "scatter"
result: "assembly"
x: "contig_n50 AND data_freeze=vgp_phase1_*"
xField: "contig_n50"
y: "scaffold_n50 AND data_freeze=vgp_phase1_*"
cat: "data_freeze[3]=vgp_phase1_aux,vgp_phase1_alt,vgp_phase1_main"
includeEstimates: false
plotRatio: "auto"
pointSize: "5"
scatterThreshold: "10000"
caption: "Contiguity of VGP assembly subsets"
size: 6
```
```report
report: scatter
result: assembly
x: assembly_span AND data_freeze=vgp_phase1_*
xField: "assembly_span"
y: "scaffold_n50"
cat: "data_freeze"
includeEstimates: false
plotRatio: auto
scatterThreshold: 10000
pointSize: "5"
caption: "Contiguity assessment of VGP Phase 1: all sets within the data-freeze"
size: 6
```

:::
## Comparative assessment of VGP Phase 1 and External Assemblies
:::grid{container direction="row" spacing="1"}

```report
report: scatter
x: contig_n50 AND assembly_span AND data_freeze=vgp_phase1_comp_*
xField: assembly_span
y: scaffold_n50
cat: data_freeze[2]=data_freeze=vgp_phase1_comp_vgp,data_freeze=vgp_phase1_comp_external
includeEstimates: true
zScale: linear
plotRatio: auto
scatterThreshold: 2000
pointSize: 5
result: assembly
taxonomy: ncbi
caption: "Contiguity of comparative set: VGP subset versus external assemblies"
size: 6
```
```report
report: scatter
x: assembly_span AND contig_n50 AND assembly_span AND data_freeze=vgp_phase1_comp_*
y: contig_n50
cat: data_freeze[2]=data_freeze=vgp_phase1_comp_vgp,data_freeze=vgp_phase1_comp_external
includeEstimates: true
zScale: linear
plotRatio: auto
scatterThreshold: 2000
pointSize: 5
result: assembly
taxonomy: ncbi
caption: "Quality assessment of comparative set: VGP subset versus external assemblies"
size: 6
```
:::

## Explore comparative sets per Class


:::grid{container direction="row" spacing="1"}
:::

:::grid{container direction="row" toggle title="Explore comparative sets per Class" spacing="1"}

```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(7777[Chondrichthyes])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Chondrichthyes
size: 6
```

```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(186623[Actinopteri])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Actinopteri
size: 6
```

```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(8292[Amphibia])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Amphibia
size: 6
```

```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(8504[Lepidosauria])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Lepidosauria
size: 6
```

```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(8782[Aves])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Aves
size: 6
```


```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(40674[Mammalia])
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Mammalia
size: 6
```




```report
report: tree
x: scaffold_n50 AND data_freeze=vgp_phase1_comp* AND tax_tree(117565,117569,1338366,)
xField: scaffold_n50
y: scaffold_n50
cat: data_freeze[2]=vgp_phase1_comp_external,vgp_phase1_comp_vgp
includeEstimates: true
collapseMonotypic: true
showPhylopics: true
phylopicRank: family
treeStyle: ring
treeThreshold: 2000
pointSize: 15
result: assembly
taxonomy: ncbi
caption: Other
size: 6
```
:::




## Distribution of Samples used for VGP Phase 1 Assemblies (data ingestion in progress)
:::grid{container direction="row" spacing="1"}

```report
report: map
x: data_freeze=vgp_phase1_*
includeEstimates: true
mapThreshold: 2000
regionField: country_list
result: assembly
taxonomy: ncbi
caption: "Sampling location of VGP Phase 1 vouchers"
size: 12
```





:::

[back to projects](/projects)
