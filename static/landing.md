<!--
Content to display below the search box on the landing page
-->

## Data summary

All search results in GoaT can be viewed in a table or as a set of interactive reports. The reports below present a live summary of the latest GoaT data. Click on a report to explore further.

:::grid{container direction="row" spacing="1" class="padded"}

::report{report="xInY" x="assembly_span" rank="phylum,class,order,family,genus,species" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Taxa with assemblies out of all INSDC Eukaryotic taxa" size=6}

::divider

::report{report="xPerRank" includeEstimates=true caption="Counts of all taxa with information on GoaT" size=6 }

:::

:::grid{container direction="row" spacing="1" class="padded"}

::report{report="xInY" x="chromosome_number" rank="Family" includeEstimates excludeAncestral="chromosome_number" excludeMissing="chromosome_number" caption="Total number of families with direct values of chromosome number" size=4}

::divider

::report{report="histogram" x="assembly_date" rank="species" cat="assembly_level" stacked="true" includeEstimates excludeAncestral="assembly_span" excludeMissing="assembly_span" ratio=2 caption="Progress of genome assemblies published on INSDC over time, by assembly level" size=8}

:::

:::grid{container direction="row" spacing="1"}

::report{report="xInY" x="assembly_level=chromosome" y="assembly_span" includeEstimates = "false" rank="species" excludeAncestral="assembly_span" excludeMissing="assembly_span" caption="Contribution of chromosome-level assemblies to the total of species with available assemblies on INSDC" size=4}

::divider

::report{report="histogram" x="genome_size" rank="species" cat="kingdom" stacked="true" ratio=2 includeEstimates excludeAncestral="genome_size" excludeMissing="genome_size" caption="Frequency distribution of species genome sizes by kingdom" size=8}

:::

GoaT features report pages highlighting progress in the [Earth BioGenome Project](/projects/EBP) and in individual affiliated projects such as the [Darwin Tree of Life](/projects/DTOL).
