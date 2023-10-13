::recordlink{result=taxon rank=species url="https://portal.darwintreeoflife.org/data/root/details/{scientific_name}" condition="attributes.bioproject=PRJEB40665" label="Darwin portal" color=#8fbc45 description="Click to view in the Darwin Tree of Life Data Portal"}

::recordlink{result=assembly url="https://portal.darwintreeoflife.org/data/organism/details/{attributes.biosample.value}" condition="attributes.bioproject=PRJEB40665" label="Darwin portal" color=#8fbc45 description="Click to view in the Darwin Tree of Life Data Portal"}

::recordlink{result=taxon url="https://blobtoolkit.genomehubs.org/view/{taxon_id}" condition="attributes.btk_target" label="BlobToolKit" color=#9c528b description="Click to view in the BlobToolKit Viewer"}

::recordlink{result=assembly url="https://blobtoolkit.genomehubs.org/view/{assemblyId}" condition="attributes.btk_target" label="BlobToolKit" color=#9c528b description="Click to view in the BlobToolKit Viewer"}

::recordlink{result=taxon,assembly url="https://www.ebi.ac.uk/ena/browser/view/{assemblyId}" condition="assemblyId" label="ENA" color=#70bdbd description="Click to view the primary assembly {assemblyId} in ENA"}

::recordlink{result=taxon,assembly url="https://www.ncbi.nlm.nih.gov/assembly/{assemblyId}" condition="assemblyId" label="NCBI" color=#20558a description="Click to view the primary assembly {assemblyId} in NCBI"}
