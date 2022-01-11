# Earth Biogenome Project
The Earth BioGenome Project (EBP), a moonshot for biology, aims to sequence, catalog and characterize the genomes of all of Earth’s eukaryotic biodiversity over a period of ten years. More information can be found in the EBP official web portal at https://www.earthbiogenome.org.

:::grid{container direction="row" spacing="1"}

::item[![GoaT](/static/images/EBG.png)]{xs=6}

:::grid{container direction="column" xs=6}

## Progress by taxon rank of the total number of genome assemblies submitted under the EBP bioproject

::report{report="xInY" x="assembly_span AND bioproject=PRJNA533106" rank="phylum,class,order,family,genus,species"}

:::

## Contiguity of EBP genomes. Distribution of contig and scaffold n50 metrics of EBP genomes by assembly level:

:::grid{container direction="row" spacing="1"}

::report{report="scatter" x="contig_n50 AND bioproject=PRJNA533106" y="scaffold_n50 AND bioproject=PRJNA533106" rank="species" cat="assembly_level" zScale="sqrt" xOpts="20,2000000000,17" yOpts="20,2000000000,17" scatterThreshold="10000" item xs=12}

:::

## Other Summary Reports

:::grid{container direction="row" spacing="1" item xs=12}

::report{report="xPerRank" x="bioproject=PRJNA533106" item xs=4 }

::report{report="histogram" x="max(assembly_date) AND bioproject=PRJNA533106" rank="species" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete" stacked="true" cumulative="false" item xs=4}

::report{report="histogram" x="max(assembly_date) AND bioproject=PRJNA533106" result="taxon" cat="assembly_level=contig,scaffold,chromosome,complete" stacked="true" cumulative="false" includeEstimates="true" includeDescendents="true" rank="Family" item xs=4}

:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_span" rank="species" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_level=chromosome" rank="species" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_span" rank="family" item xs=4}


:::

[back to projects](/projects)
