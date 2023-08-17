### Sequencing Status of {{project}} Species

:::grid{container direction="row" spacing="1"}

```report
report: xInY
x: "sample_collected={{project}}"
y: "long_list={{project}}"
rank: species
includeEstimates: true
excludeAncestral: sample_collected
excludeMissing: sample_collected
caption: "Total of {{project}} target species collected"
item: true
xs: 6
```

```report
report: xInY
x: "in_progress={{project}}"
y: "long_list={{project}}"
rank: species
includeEstimates: true
excludeAncestral: in_progress
excludeMissing: in_progress
caption: "Total of {{project}} target species with genome sequencing currently in progress"
item: true
xs: 6
```

:::
