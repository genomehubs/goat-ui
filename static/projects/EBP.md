# Earth Biogenome Project
The Earth BioGenome Project (EBP), a moonshot for biology, aims to sequence, catalog and characterize the genomes of all of Earth’s eukaryotic biodiversity over a period of ten years. More information can be found in the EBP official web portal at https://www.earthbiogenome.org.

:::grid{container direction="row" spacing="1"}

::item[![GoaT](/static/images/EBG.png)]{xs=22}

:::

# Data summary

Current number of EBP genomes by taxonomic rank:

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span AND bioproject=PRJNA533106" rank="phylum,class,order,family,genus,species" item xs=12}

:::
Contiguity of EBP genomes. Distribution of contig and scaffold n50 metrics of EBP genomes by assembly level:

:::grid{container direction="row" spacing="1"}

::report{report="scatter" x="contig_n50 AND bioproject=PRJNA533106" y="scaffold_n50 AND bioproject=PRJNA533106" rank="species" cat="assembly_level" zScale="sqrt" xOpts="20,2000000000,17" yOpts="20,2000000000,17" scatterThreshold="10000" item xs=12}

:::

# Other Summary Reports

:::grid{container direction="row" spacing="1"}

http://localhost:8883/reporturl?report=histogram&x=max%28assembly_date%29%20AND%20bioproject%3DPRJNA533106&result=taxon&cat=assembly_level&stacked=true&cumulative=false&rank=family&includeEstimates=true

::report{report="histogram" x="max(assembly_date) AND bioproject=PRJNA533106" result="taxon" cat="assembly_level" stacked="true" cumulative="false" include_estimates="true" include_descendents="true" rank="Family" item xs=8}

::report{report="xPerRank" x="bioproject=PRJNA533106" item xs=4 }

:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_span>0 AND bioproject=PRJNA533106" rank="species" item xs=4}

::report{report="histogram" x="max(assembly_date) AND bioproject=PRJNA533106" rank="species" cat="assembly_level" stacked="true" cumulative="false" ratio=2 item xs=8}

:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_span" rank="species" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_level=chromosome" rank="species" item xs=4}

::report{report="xInY" x="assembly_level=chromosome AND bioproject=PRJNA533106" y="assembly_span" rank="family" item xs=4}


:::

[back to projects](/projects)
