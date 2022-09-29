import Table from './Table.vue';


export default {
  title: 'Main Components/ResultsTable',
  component: Table,
};


  const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Table },
    template: '<Table :tools="tools" />'
  });
  
  export const Example = Template.bind({});

  Example.args = {
    tools: [
        {
          "_id": "62446c0e31de5b3c1926b6c0",
          "curation" :  ['Extraction', 'Accession', 'Processing'],
          "authors": ["Alex Lisovich", "Roger Day"],
          "bioschemas": false,
          "description": ["Identifier mapping performance analysis.", "ID Mapping Analysis", "Identifier mapping performance analysis", "Identifier mapping performance analysis"],
          "documentation": [],
          "download": ["https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.26.0-r351_0.tar.bz2", "https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.28.0-r36_1.tar.bz2", "https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.30.0-r36_0.tar.bz2", "https://anaconda.org/bioconda/bioconductor-idmappinganalysis/1.30.0/download/noarch/bioconductor-idmappinganalysis-1.30.0-r36_0.tar.bz2", "https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.30.0.tar.gz", "https://bioconductor.org/packages/3.10/bioc/src/contrib/IdMappingAnalysis_1.30.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.30.0_src_all.tar.gz", "https://anaconda.org/bioconda/bioconductor-idmappinganalysis/1.28.0/download/noarch/bioconductor-idmappinganalysis-1.28.0-r36_1.tar.bz2", "https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.28.0.tar.gz", "https://bioconductor.org/packages/3.9/bioc/src/contrib/IdMappingAnalysis_1.28.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.28.0_src_all.tar.gz", "https://anaconda.org/bioconda/bioconductor-idmappinganalysis/1.26.0/download/noarch/bioconductor-idmappinganalysis-1.26.0-r351_0.tar.bz2", "https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.26.0.tar.gz", "https://bioconductor.org/packages/3.8/bioc/src/contrib/IdMappingAnalysis_1.26.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.26.0_src_all.tar.gz"],
          "https": false,
          "input": [{
              "datatype": "http://edamontology.org/data_0842",
              "formats": ["http://edamontology.org/format_2330"]
          }],
          "inst_instr": true,
          "license": ["GPL-2", "GPL-2.0"],
          "links": ["https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.26.0-r351_0.tar.bz2", "https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.28.0-r36_1.tar.bz2", "https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.30.0-r36_0.tar.bz2", "http://bioconductor.org/packages/release/bioc/html/IdMappingAnalysis.html", "https://bioconductor.org/packages/3.10/bioc/html/IdMappingAnalysis.html", "https://bioconductor.org/packages/3.9/bioc/html/IdMappingAnalysis.html", "https://bioconductor.org/packages/3.8/bioc/html/IdMappingAnalysis.html"],
          "name": "idmappinganalysis",
          "operational": true,
          "os": ["Linux", "Mac", "Windows"],
          "output": [{
              "datatype": "http://edamontology.org/data_2884",
              "formats": ["http://edamontology.org/format_2330", "http://edamontology.org/format_3547"]
          }],
          "repository": [],
          "semantics": {
              "inputs": [{
                  "datatype": "http://edamontology.org/data_0842",
                  "formats": ["http://edamontology.org/format_2330"]
              }],
              "outputs": [{
                  "datatype": "http://edamontology.org/data_2884",
                  "formats": ["http://edamontology.org/format_2330", "http://edamontology.org/format_3547"]
              }],
              "topics": ["http://edamontology.org/topic_3071", "http://edamontology.org/topic_0091"],
              "operations": ["http://edamontology.org/operation_3282"]
          },
          "source": ["bioconda_conda", "opeb_metrics", "biotools", "bioconda"],
          "src": ["https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.30.0.tar.gz", "https://bioconductor.org/packages/3.10/bioc/src/contrib/IdMappingAnalysis_1.30.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.30.0_src_all.tar.gz", "https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.28.0.tar.gz", "https://bioconductor.org/packages/3.9/bioc/src/contrib/IdMappingAnalysis_1.28.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.28.0_src_all.tar.gz", "https://bioarchive.galaxyproject.org/IdMappingAnalysis_1.26.0.tar.gz", "https://bioconductor.org/packages/3.8/bioc/src/contrib/IdMappingAnalysis_1.26.0.tar.gz", "https://depot.galaxyproject.org/software/bioconductor-idmappinganalysis/bioconductor-idmappinganalysis_1.26.0_src_all.tar.gz"],
          "ssl": true,
          "termsUse": false,
          "test": false,
          "type": "cmd",
          "version": ["1.26", "1.26.0", "1.28", "1.30.0", "1.30", "1.28.0", "1.18.0", "1.18"],
          "edam_topics": [{
              "uri": "http://edamontology.org/topic_3071",
              "label": "Biological databases"
          }, {
              "uri": "http://edamontology.org/topic_0091",
              "label": "Bioinformatics"
          }],
          "edam_operations": [{
              "uri": "http://edamontology.org/operation_3282",
              "label": "ID mapping"
          }],
          "matches": ["identifier"],
          "citations": [{
              "cit_count": 1363,
              "citations": [{
                  "count": 27,
                  "year": "2015"
              }, {
                  "count": 149,
                  "year": "2016"
              }, {
                  "count": 186,
                  "year": "2017"
              }, {
                  "count": 233,
                  "year": "2018"
              }, {
                  "count": 246,
                  "year": "2019"
              }, {
                  "count": 237,
                  "year": "2020"
              }, {
                  "count": 266,
                  "year": "2021"
              }, {
                  "count": 19,
                  "year": "2022"
              }],
              "doi": "10.1038/nmeth.3252",
              "pmcid": "PMC4509590",
              "pmid": "25633503",
              "ref_count": 27,
              "refs": [{
                  "count": 1,
                  "year": "2001"
              }, {
                  "count": 1,
                  "year": "2004"
              }, {
                  "count": 2,
                  "year": "2005"
              }, {
                  "count": 2,
                  "year": "2007"
              }, {
                  "count": 1,
                  "year": "2008"
              }, {
                  "count": 1,
                  "year": "2009"
              }, {
                  "count": 2,
                  "year": "2010"
              }, {
                  "count": 2,
                  "year": "2012"
              }, {
                  "count": 3,
                  "year": "2013"
              }, {
                  "count": 12,
                  "year": "2014"
              }],
              "title": "Orchestrating high-throughput genomic analysis with Bioconductor.",
              "year": 2015,
              "trace": {
                  "x": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                  "y": [27, 149, 186, 233, 246, 237, 266, 19]
              }
          }],
          "citations_other": [],
          "sources_labels": {
              "bioconda": "https://conda.anaconda.org/bioconda/noarch/bioconductor-idmappinganalysis-1.30.0-r36_0.tar.bz2",
              "biotools": "https://bio.tools/idmappinganalysis"
          },
          "input_formats": [
                "Textual format"
            ],
            "output_formats": [
                "Textual format",
                "Image format"
                ],
          "input_format_labels": [{
            "uri": "http://edamontology.org/format_2330",
            "label": "Textual format"
          }],
          "output_format_labels": [{
            "uri": "http://edamontology.org/format_2330",
            "label": "Textual format"
          },
          {
            "uri": "http://edamontology.org/format_3547",
            "label": "Image format"
          }
        ],
        "raw_score": 1,
        "score": 1
        },
        {
        "_id": "62446e0731de5b3c192797a5",
        "curation" : ['ETL'],
        "authors": ["Jüri Reimand", "Jaak Vilo"],
        "bioschemas": false,
        "description": ["gProfileR performs functional enrichment analysis, gene identifier conversion and mapping homologous genes across related organisms via the 'g:Profiler' toolkit. The tool performs statistical enrichment analysis to find over-representation of information like Gene Ontology terms, biological pathways, regulatory DNA elements, human disease gene annotations, and protein-protein interaction networks. The basic input is a list of genes."],
        "documentation": [],
        "download": [],
        "https": false,
        "input": [{
            "datatype": "http://edamontology.org/data_3021",
            "formats": ["http://edamontology.org/format_1964"]
        }, {
            "datatype": "http://edamontology.org/data_2295",
            "formats": ["http://edamontology.org/format_1964"]
        }],
        "inst_instr": false,
        "license": ["GPL-2.0"],
        "links": ["https://cran.r-project.org/web/packages/gProfileR/index.html"],
        "name": "gprofile_r",
        "operational": true,
        "os": ["Linux", "Windows", "Mac"],
        "output": [{
            "datatype": "http://edamontology.org/data_2600",
            "formats": ["http://edamontology.org/format_3475"]
        }],
        "repository": [],
        "semantics": {
            "inputs": [{
                "datatype": "http://edamontology.org/data_3021",
                "formats": ["http://edamontology.org/format_1964"]
            }, {
                "datatype": "http://edamontology.org/data_2295",
                "formats": ["http://edamontology.org/format_1964"]
            }],
            "outputs": [{
                "datatype": "http://edamontology.org/data_2600",
                "formats": ["http://edamontology.org/format_3475"]
            }],
            "topics": ["http://edamontology.org/topic_0602", "http://edamontology.org/topic_0089", "http://edamontology.org/topic_1775", "http://edamontology.org/topic_0622"],
            "operations": ["http://edamontology.org/operation_2436", "http://edamontology.org/operation_2497", "http://edamontology.org/operation_2422", "http://edamontology.org/operation_3672"]
        },
        "source": ["opeb_metrics", "biotools"],
        "src": [],
        "ssl": true,
        "termsUse": false,
        "test": false,
        "type": "suite",
        "version": ["0.6", "0.6.1"],
        "edam_topics": [{
            "uri": "http://edamontology.org/topic_0602",
            "label": "Molecular interactions, pathways and networks"
        }, {
            "uri": "http://edamontology.org/topic_0089",
            "label": "Ontology and terminology"
        }, {
            "uri": "http://edamontology.org/topic_1775",
            "label": "Function analysis"
        }, {
            "uri": "http://edamontology.org/topic_0622",
            "label": "Genomics"
        }],
        "edam_operations": [{
            "uri": "http://edamontology.org/operation_2436",
            "label": "Gene-set enrichment analysis"
        }, {
            "uri": "http://edamontology.org/operation_2497",
            "label": "Pathway or network analysis"
        }, {
            "uri": "http://edamontology.org/operation_2422",
            "label": "Data retrieval"
        }, {
            "uri": "http://edamontology.org/operation_3672",
            "label": "Gene functional annotation"
        }],
        "matches": ["identifier"],
        "citations": [{
            "cit_count": 589,
            "citations": [{
                "count": 9,
                "year": "2016"
            }, {
                "count": 81,
                "year": "2017"
            }, {
                "count": 111,
                "year": "2018"
            }, {
                "count": 157,
                "year": "2019"
            }, {
                "count": 108,
                "year": "2020"
            }, {
                "count": 112,
                "year": "2021"
            }, {
                "count": 11,
                "year": "2022"
            }],
            "doi": "10.1093/nar/gkw199",
            "pmcid": "PMC4987867",
            "pmid": "27098042",
            "ref_count": 53,
            "refs": [{
                "count": 1,
                "year": "2000"
            }, {
                "count": 1,
                "year": "2001"
            }, {
                "count": 2,
                "year": "2005"
            }, {
                "count": 2,
                "year": "2007"
            }, {
                "count": 2,
                "year": "2008"
            }, {
                "count": 3,
                "year": "2009"
            }, {
                "count": 2,
                "year": "2010"
            }, {
                "count": 2,
                "year": "2011"
            }, {
                "count": 3,
                "year": "2012"
            }, {
                "count": 8,
                "year": "2013"
            }, {
                "count": 4,
                "year": "2014"
            }, {
                "count": 16,
                "year": "2015"
            }, {
                "count": 7,
                "year": "2016"
            }],
            "title": "g:Profiler-a web server for functional interpretation of gene lists (2016 update).",
            "year": 2016,
            "trace": {
                "x": ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                "y": [9, 81, 111, 157, 108, 112, 11]
            }
        }],
        "citations_other": [],
        "sources_labels": {
            "biotools": "https://bio.tools/gprofile_r",
            "other": "https://cran.r-project.org/web/packages/gProfileR/index.html"
        },
        "input_formats": [
                "plain text format (unformatted)"
            ],
            "output_formats": [
                "TSV",
                ],
        "input_format_labels":[
            {
                "uri": "http://edamontology.org/format_1964",
                "label": "plain text format (unformatted)"
            }
        ],
        "output_format_labels": [
            {
                "uri": "http://edamontology.org/format_1964",
                "label": "TSV"
            }
        ],
        "raw_score": 1,
        "score": 1
        }]
  };

