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
size: 4
```

```report
report: xInY
x: "sample_acquired={{project}}"
y: "long_list={{project}}"
rank: species
includeEstimates: true
excludeAncestral: sample_acquired
excludeMissing: sample_acquired
caption: "Total of {{project}} target species received by the assigned sequencing center"
size: 4
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
size: 4
```

:::
:::grid{container direction="row" spacing="1" class="padded"}
:::

### Sequencing status description:

- **sample_collected:** tissue is available for whole genome sequencing
- **sample_acquired:** samples received by the designated sequencing centers
- **in_progress:** includes data_generation, in_assembly, and submitted to INSDC
- **open:** data publicly available in a project-specific data store
- **insdc_open:** assembly is publicly available on INSDC
- **published:** has publication associated with genome assembly
