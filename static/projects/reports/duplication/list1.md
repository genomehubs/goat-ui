### Criteria applied for search:

- target species of {{project}}
- assembly not submitted by {{project}}
- assembly meeting [EBP standard criteria](https://github.com/genomehubs/goat-data/wiki/5-Earth-Biogenome-Project-(EBP)-FAQs#how-are-ebp-standard-criteria-and-dates-calculated) is available for species
- For _status per project_ use [this link](/search?query=long_list%3D{{project}}%20AND%20ebp_standard_date%20AND%20bioproject%21%3D{{bioproject}}%20AND%20tax_rank%28species%29&result=taxon&includeEstimates=true&taxonomy=ncbi&size=10&fields=assembly_level%2Csequencing_status_{{lc_project}}%2Csequencing_status_%2A&emptyColumns=false)

::grid{direction="row" spacing="2" class="padded"}

**EBP suggestion:** revisit the need to sequence these species.


::grid{direction="row" spacing="3" class="padded"}

_(\*) Species that have at least one assembly available in INSDC meeting the EBP-standard criteria, out of all species from {{project}}'s target list._

