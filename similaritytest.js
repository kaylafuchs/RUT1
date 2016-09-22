var similarity = function( /*object*/ origin, /*object*/ target, type) {
  origin = typeof(origin) === 'string' ? JSON.parse(origin) : origin;
  target = typeof(target) === 'string' ? JSON.parse(target) : target;
  var distance = 0.0,
    origin_traits = origin.tree.children[type].children[0].children,
    target_traits = target.tree.children[type].children[0].children;

  // for each trait in origin personality...
  origin_traits.forEach(function(trait, i) {
    distance += Math.pow(trait.percentage - target_traits[i].percentage, 2);
  });
  var ret = 1 - (Math.sqrt(distance / origin_traits.length));
  return ret;
};

var melania = {
  "id": "*UNKNOWN*",
  "source": "*UNKNOWN*",
  "word_count": 1366,
  "processed_lang": "en",
  "tree": {
    "id": "r",
    "name": "root",
    "children": [
      {
        "id": "personality",
        "name": "Big 5",
        "children": [
          {
            "id": "Conscientiousness_parent",
            "name": "Conscientiousness",
            "category": "personality",
            "percentage": 0.9881606301138224,
            "children": [
              {
                "id": "Openness",
                "name": "Openness",
                "category": "personality",
                "percentage": 0.9468227588351327,
                "sampling_error": 0.0575972664,
                "children": [
                  {
                    "id": "Adventurousness",
                    "name": "Adventurousness",
                    "category": "personality",
                    "percentage": 0.624723432097231,
                    "sampling_error": 0.0493598676
                  },
                  {
                    "id": "Artistic interests",
                    "name": "Artistic interests",
                    "category": "personality",
                    "percentage": 0.9421986221363561,
                    "sampling_error": 0.1007237228
                  },
                  {
                    "id": "Emotionality",
                    "name": "Emotionality",
                    "category": "personality",
                    "percentage": 0.9431993344334427,
                    "sampling_error": 0.0463710956
                  },
                  {
                    "id": "Imagination",
                    "name": "Imagination",
                    "category": "personality",
                    "percentage": 0.17003193052499221,
                    "sampling_error": 0.061527203
                  },
                  {
                    "id": "Intellect",
                    "name": "Intellect",
                    "category": "personality",
                    "percentage": 0.9805641790721193,
                    "sampling_error": 0.053933311399999996
                  },
                  {
                    "id": "Liberalism",
                    "name": "Authority-challenging",
                    "category": "personality",
                    "percentage": 0.3972505623640677,
                    "sampling_error": 0.08100808940000001
                  }
                ]
              },
              {
                "id": "Conscientiousness",
                "name": "Conscientiousness",
                "category": "personality",
                "percentage": 0.9881606301138224,
                "sampling_error": 0.0741033462,
                "children": [
                  {
                    "id": "Achievement striving",
                    "name": "Achievement striving",
                    "category": "personality",
                    "percentage": 0.9637662466531312,
                    "sampling_error": 0.09548784839999999
                  },
                  {
                    "id": "Cautiousness",
                    "name": "Cautiousness",
                    "category": "personality",
                    "percentage": 0.9381384218702009,
                    "sampling_error": 0.0887064146
                  },
                  {
                    "id": "Dutifulness",
                    "name": "Dutifulness",
                    "category": "personality",
                    "percentage": 0.9616875174468899,
                    "sampling_error": 0.0586298218
                  },
                  {
                    "id": "Orderliness",
                    "name": "Orderliness",
                    "category": "personality",
                    "percentage": 0.41845728392951087,
                    "sampling_error": 0.0680052832
                  },
                  {
                    "id": "Self-discipline",
                    "name": "Self-discipline",
                    "category": "personality",
                    "percentage": 0.9574399065545717,
                    "sampling_error": 0.0456187406
                  },
                  {
                    "id": "Self-efficacy",
                    "name": "Self-efficacy",
                    "category": "personality",
                    "percentage": 0.9026634685462305,
                    "sampling_error": 0.0889993158
                  }
                ]
              },
              {
                "id": "Extraversion",
                "name": "Extraversion",
                "category": "personality",
                "percentage": 0.8098901615787003,
                "sampling_error": 0.054411005400000004,
                "children": [
                  {
                    "id": "Activity level",
                    "name": "Activity level",
                    "category": "personality",
                    "percentage": 0.9825391218602512,
                    "sampling_error": 0.075087048
                  },
                  {
                    "id": "Assertiveness",
                    "name": "Assertiveness",
                    "category": "personality",
                    "percentage": 0.9956165053759592,
                    "sampling_error": 0.0803081074
                  },
                  {
                    "id": "Cheerfulness",
                    "name": "Cheerfulness",
                    "category": "personality",
                    "percentage": 0.9357464244778569,
                    "sampling_error": 0.1013042028
                  },
                  {
                    "id": "Excitement-seeking",
                    "name": "Excitement-seeking",
                    "category": "personality",
                    "percentage": 0.14296690381719757,
                    "sampling_error": 0.079081271
                  },
                  {
                    "id": "Friendliness",
                    "name": "Outgoing",
                    "category": "personality",
                    "percentage": 0.9714075519204948,
                    "sampling_error": 0.0727534626
                  },
                  {
                    "id": "Gregariousness",
                    "name": "Gregariousness",
                    "category": "personality",
                    "percentage": 0.4687428083178622,
                    "sampling_error": 0.056220621799999995
                  }
                ]
              },
              {
                "id": "Agreeableness",
                "name": "Agreeableness",
                "category": "personality",
                "percentage": 0.7809348207408638,
                "sampling_error": 0.0936960676,
                "children": [
                  {
                    "id": "Altruism",
                    "name": "Altruism",
                    "category": "personality",
                    "percentage": 0.9990859686955618,
                    "sampling_error": 0.0681256034
                  },
                  {
                    "id": "Cooperation",
                    "name": "Cooperation",
                    "category": "personality",
                    "percentage": 0.8117416663879233,
                    "sampling_error": 0.0775793594
                  },
                  {
                    "id": "Modesty",
                    "name": "Modesty",
                    "category": "personality",
                    "percentage": 0.6485648625336984,
                    "sampling_error": 0.053547539
                  },
                  {
                    "id": "Morality",
                    "name": "Uncompromising",
                    "category": "personality",
                    "percentage": 0.9667387609369511,
                    "sampling_error": 0.060764896
                  },
                  {
                    "id": "Sympathy",
                    "name": "Sympathy",
                    "category": "personality",
                    "percentage": 0.9997567481449369,
                    "sampling_error": 0.09362235499999999
                  },
                  {
                    "id": "Trust",
                    "name": "Trust",
                    "category": "personality",
                    "percentage": 0.8278245507128514,
                    "sampling_error": 0.0539853454
                  }
                ]
              },
              {
                "id": "Neuroticism",
                "name": "Emotional range",
                "category": "personality",
                "percentage": 0.9263162896565036,
                "sampling_error": 0.087199026,
                "children": [
                  {
                    "id": "Anger",
                    "name": "Fiery",
                    "category": "personality",
                    "percentage": 0.020516781782459192,
                    "sampling_error": 0.0907644414
                  },
                  {
                    "id": "Anxiety",
                    "name": "Prone to worry",
                    "category": "personality",
                    "percentage": 0.047591996269761294,
                    "sampling_error": 0.0529745888
                  },
                  {
                    "id": "Depression",
                    "name": "Melancholy",
                    "category": "personality",
                    "percentage": 0.05775096796693435,
                    "sampling_error": 0.0562735618
                  },
                  {
                    "id": "Immoderation",
                    "name": "Immoderation",
                    "category": "personality",
                    "percentage": 0.05981242844782225,
                    "sampling_error": 0.0513394498
                  },
                  {
                    "id": "Self-consciousness",
                    "name": "Self-consciousness",
                    "category": "personality",
                    "percentage": 0.02816293942389092,
                    "sampling_error": 0.0543071652
                  },
                  {
                    "id": "Vulnerability",
                    "name": "Susceptible to stress",
                    "category": "personality",
                    "percentage": 0.04821129443337191,
                    "sampling_error": 0.082148543
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "needs",
        "name": "Needs",
        "children": [
          {
            "id": "Challenge_parent",
            "name": "Challenge",
            "category": "needs",
            "percentage": 0.04356473767955005,
            "children": [
              {
                "id": "Challenge",
                "name": "Challenge",
                "category": "needs",
                "percentage": 0.04356473767955005,
                "sampling_error": 0.0808616948
              },
              {
                "id": "Closeness",
                "name": "Closeness",
                "category": "needs",
                "percentage": 0.7387147763752452,
                "sampling_error": 0.0799700458
              },
              {
                "id": "Curiosity",
                "name": "Curiosity",
                "category": "needs",
                "percentage": 0.754987586595987,
                "sampling_error": 0.1148217366
              },
              {
                "id": "Excitement",
                "name": "Excitement",
                "category": "needs",
                "percentage": 0.06987603425979377,
                "sampling_error": 0.1042857098
              },
              {
                "id": "Harmony",
                "name": "Harmony",
                "category": "needs",
                "percentage": 0.7071736020963556,
                "sampling_error": 0.1042875922
              },
              {
                "id": "Ideal",
                "name": "Ideal",
                "category": "needs",
                "percentage": 0.3364176391699781,
                "sampling_error": 0.0941034026
              },
              {
                "id": "Liberty",
                "name": "Liberty",
                "category": "needs",
                "percentage": 0.2077876507271652,
                "sampling_error": 0.1398349262
              },
              {
                "id": "Love",
                "name": "Love",
                "category": "needs",
                "percentage": 0.3037128617832653,
                "sampling_error": 0.09606074020000001
              },
              {
                "id": "Practicality",
                "name": "Practicality",
                "category": "needs",
                "percentage": 0.04571950286086285,
                "sampling_error": 0.0833618124
              },
              {
                "id": "Self-expression",
                "name": "Self-expression",
                "category": "needs",
                "percentage": 0.3545484475658991,
                "sampling_error": 0.0781236194
              },
              {
                "id": "Stability",
                "name": "Stability",
                "category": "needs",
                "percentage": 0.8181463625029441,
                "sampling_error": 0.1015668344
              },
              {
                "id": "Structure",
                "name": "Structure",
                "category": "needs",
                "percentage": 0.8921088100960728,
                "sampling_error": 0.0764515912
              }
            ]
          }
        ]
      },
      {
        "id": "values",
        "name": "Values",
        "children": [
          {
            "id": "Self-enhancement_parent",
            "name": "Self-enhancement",
            "category": "values",
            "percentage": 0.0038948433865765297,
            "children": [
              {
                "id": "Conservation",
                "name": "Conservation",
                "category": "values",
                "percentage": 0.9239931437565172,
                "sampling_error": 0.0659575504
              },
              {
                "id": "Openness to change",
                "name": "Openness to change",
                "category": "values",
                "percentage": 0.2662917467475924,
                "sampling_error": 0.0623360686
              },
              {
                "id": "Hedonism",
                "name": "Hedonism",
                "category": "values",
                "percentage": 0.010449690746511864,
                "sampling_error": 0.131561737
              },
              {
                "id": "Self-enhancement",
                "name": "Self-enhancement",
                "category": "values",
                "percentage": 0.0038948433865765297,
                "sampling_error": 0.09888828200000001
              },
              {
                "id": "Self-transcendence",
                "name": "Self-transcendence",
                "category": "values",
                "percentage": 0.48032266506301896,
                "sampling_error": 0.0767987272
              }
            ]
          }
        ]
      }
    ]
  },
  "warnings": []
}

var michelle = {
  "id": "*UNKNOWN*",
  "source": "*UNKNOWN*",
  "word_count": 2161,
  "processed_lang": "en",
  "tree": {
    "id": "r",
    "name": "root",
    "children": [
      {
        "id": "personality",
        "name": "Big 5",
        "children": [
          {
            "id": "Conscientiousness_parent",
            "name": "Conscientiousness",
            "category": "personality",
            "percentage": 0.9277550745975747,
            "children": [
              {
                "id": "Openness",
                "name": "Openness",
                "category": "personality",
                "percentage": 0.8448057864922532,
                "sampling_error": 0.05573437896,
                "children": [
                  {
                    "id": "Adventurousness",
                    "name": "Adventurousness",
                    "category": "personality",
                    "percentage": 0.5325809480218497,
                    "sampling_error": 0.048041246759999996
                  },
                  {
                    "id": "Artistic interests",
                    "name": "Artistic interests",
                    "category": "personality",
                    "percentage": 0.8720406947321508,
                    "sampling_error": 0.09839788964
                  },
                  {
                    "id": "Emotionality",
                    "name": "Emotionality",
                    "category": "personality",
                    "percentage": 0.9613726088177226,
                    "sampling_error": 0.0452366936
                  },
                  {
                    "id": "Imagination",
                    "name": "Imagination",
                    "category": "personality",
                    "percentage": 0.19059200747748417,
                    "sampling_error": 0.059884945120000005
                  },
                  {
                    "id": "Intellect",
                    "name": "Intellect",
                    "category": "personality",
                    "percentage": 0.9632598995472813,
                    "sampling_error": 0.052298050959999995
                  },
                  {
                    "id": "Liberalism",
                    "name": "Authority-challenging",
                    "category": "personality",
                    "percentage": 0.4111091255946818,
                    "sampling_error": 0.0788315556
                  }
                ]
              },
              {
                "id": "Conscientiousness",
                "name": "Conscientiousness",
                "category": "personality",
                "percentage": 0.9277550745975747,
                "sampling_error": 0.07172162348,
                "children": [
                  {
                    "id": "Achievement striving",
                    "name": "Achievement striving",
                    "category": "personality",
                    "percentage": 0.934141298772616,
                    "sampling_error": 0.09334944496
                  },
                  {
                    "id": "Cautiousness",
                    "name": "Cautiousness",
                    "category": "personality",
                    "percentage": 0.9275073839846684,
                    "sampling_error": 0.08624577372
                  },
                  {
                    "id": "Dutifulness",
                    "name": "Dutifulness",
                    "category": "personality",
                    "percentage": 0.903986852321131,
                    "sampling_error": 0.05681995584
                  },
                  {
                    "id": "Orderliness",
                    "name": "Orderliness",
                    "category": "personality",
                    "percentage": 0.43927143228839494,
                    "sampling_error": 0.06637986968
                  },
                  {
                    "id": "Self-discipline",
                    "name": "Self-discipline",
                    "category": "personality",
                    "percentage": 0.8521929632411501,
                    "sampling_error": 0.04393394212
                  },
                  {
                    "id": "Self-efficacy",
                    "name": "Self-efficacy",
                    "category": "personality",
                    "percentage": 0.8942917374681612,
                    "sampling_error": 0.08701920324
                  }
                ]
              },
              {
                "id": "Extraversion",
                "name": "Extraversion",
                "category": "personality",
                "percentage": 0.5592220665735457,
                "sampling_error": 0.05267704612,
                "children": [
                  {
                    "id": "Activity level",
                    "name": "Activity level",
                    "category": "personality",
                    "percentage": 0.9567649069783583,
                    "sampling_error": 0.07295413864
                  },
                  {
                    "id": "Assertiveness",
                    "name": "Assertiveness",
                    "category": "personality",
                    "percentage": 0.9948411362681195,
                    "sampling_error": 0.07802145716
                  },
                  {
                    "id": "Cheerfulness",
                    "name": "Cheerfulness",
                    "category": "personality",
                    "percentage": 0.8258401156209887,
                    "sampling_error": 0.09779385204
                  },
                  {
                    "id": "Excitement-seeking",
                    "name": "Excitement-seeking",
                    "category": "personality",
                    "percentage": 0.17157625781410568,
                    "sampling_error": 0.07753312644
                  },
                  {
                    "id": "Friendliness",
                    "name": "Outgoing",
                    "category": "personality",
                    "percentage": 0.9670597832556823,
                    "sampling_error": 0.07067297484
                  },
                  {
                    "id": "Gregariousness",
                    "name": "Gregariousness",
                    "category": "personality",
                    "percentage": 0.6645830960797473,
                    "sampling_error": 0.05457025316
                  }
                ]
              },
              {
                "id": "Agreeableness",
                "name": "Agreeableness",
                "category": "personality",
                "percentage": 0.7201983620723061,
                "sampling_error": 0.09163348884,
                "children": [
                  {
                    "id": "Altruism",
                    "name": "Altruism",
                    "category": "personality",
                    "percentage": 0.9990584488570389,
                    "sampling_error": 0.06637431212
                  },
                  {
                    "id": "Cooperation",
                    "name": "Cooperation",
                    "category": "personality",
                    "percentage": 0.6908105603342846,
                    "sampling_error": 0.0755232726
                  },
                  {
                    "id": "Modesty",
                    "name": "Modesty",
                    "category": "personality",
                    "percentage": 0.5941218130304713,
                    "sampling_error": 0.05192365696
                  },
                  {
                    "id": "Morality",
                    "name": "Uncompromising",
                    "category": "personality",
                    "percentage": 0.9414862563123598,
                    "sampling_error": 0.059228523639999996
                  },
                  {
                    "id": "Sympathy",
                    "name": "Sympathy",
                    "category": "personality",
                    "percentage": 0.9998898969282375,
                    "sampling_error": 0.0916516964
                  },
                  {
                    "id": "Trust",
                    "name": "Trust",
                    "category": "personality",
                    "percentage": 0.7275480778669462,
                    "sampling_error": 0.05175149892
                  }
                ]
              },
              {
                "id": "Neuroticism",
                "name": "Emotional range",
                "category": "personality",
                "percentage": 0.8664988670765956,
                "sampling_error": 0.0841364278,
                "children": [
                  {
                    "id": "Anger",
                    "name": "Fiery",
                    "category": "personality",
                    "percentage": 0.031790613222817454,
                    "sampling_error": 0.08840791216
                  },
                  {
                    "id": "Anxiety",
                    "name": "Prone to worry",
                    "category": "personality",
                    "percentage": 0.08210129873073468,
                    "sampling_error": 0.05148321812
                  },
                  {
                    "id": "Depression",
                    "name": "Melancholy",
                    "category": "personality",
                    "percentage": 0.12712170792799932,
                    "sampling_error": 0.05436550012
                  },
                  {
                    "id": "Immoderation",
                    "name": "Immoderation",
                    "category": "personality",
                    "percentage": 0.1389307784906656,
                    "sampling_error": 0.04984982664
                  },
                  {
                    "id": "Self-consciousness",
                    "name": "Self-consciousness",
                    "category": "personality",
                    "percentage": 0.032207255766883436,
                    "sampling_error": 0.05272613836
                  },
                  {
                    "id": "Vulnerability",
                    "name": "Susceptible to stress",
                    "category": "personality",
                    "percentage": 0.0717454833039114,
                    "sampling_error": 0.08036558276
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "needs",
        "name": "Needs",
        "children": [
          {
            "id": "Practicality_parent",
            "name": "Practicality",
            "category": "needs",
            "percentage": 0.026795056429553488,
            "children": [
              {
                "id": "Challenge",
                "name": "Challenge",
                "category": "needs",
                "percentage": 0.05653692676804556,
                "sampling_error": 0.078738005
              },
              {
                "id": "Closeness",
                "name": "Closeness",
                "category": "needs",
                "percentage": 0.6242106533293506,
                "sampling_error": 0.07786844912
              },
              {
                "id": "Curiosity",
                "name": "Curiosity",
                "category": "needs",
                "percentage": 0.4576742123814783,
                "sampling_error": 0.11160242932
              },
              {
                "id": "Excitement",
                "name": "Excitement",
                "category": "needs",
                "percentage": 0.06314114467089837,
                "sampling_error": 0.10193555796
              },
              {
                "id": "Harmony",
                "name": "Harmony",
                "category": "needs",
                "percentage": 0.5539995747931651,
                "sampling_error": 0.1012659672
              },
              {
                "id": "Ideal",
                "name": "Ideal",
                "category": "needs",
                "percentage": 0.15599853933302588,
                "sampling_error": 0.09192347516
              },
              {
                "id": "Liberty",
                "name": "Liberty",
                "category": "needs",
                "percentage": 0.11131783676701146,
                "sampling_error": 0.13645413664
              },
              {
                "id": "Love",
                "name": "Love",
                "category": "needs",
                "percentage": 0.302133960785966,
                "sampling_error": 0.09321271976
              },
              {
                "id": "Practicality",
                "name": "Practicality",
                "category": "needs",
                "percentage": 0.026795056429553488,
                "sampling_error": 0.08141506036
              },
              {
                "id": "Self-expression",
                "name": "Self-expression",
                "category": "needs",
                "percentage": 0.14663210612428318,
                "sampling_error": 0.07607693844
              },
              {
                "id": "Stability",
                "name": "Stability",
                "category": "needs",
                "percentage": 0.8128939893104614,
                "sampling_error": 0.09913819768
              },
              {
                "id": "Structure",
                "name": "Structure",
                "category": "needs",
                "percentage": 0.8998229856725102,
                "sampling_error": 0.07459644736
              }
            ]
          }
        ]
      },
      {
        "id": "values",
        "name": "Values",
        "children": [
          {
            "id": "Self-enhancement_parent",
            "name": "Self-enhancement",
            "category": "values",
            "percentage": 0.003975671239956735,
            "children": [
              {
                "id": "Conservation",
                "name": "Conservation",
                "category": "values",
                "percentage": 0.8732845882401281,
                "sampling_error": 0.06475191132000001
              },
              {
                "id": "Openness to change",
                "name": "Openness to change",
                "category": "values",
                "percentage": 0.23094399451268527,
                "sampling_error": 0.06061998148
              },
              {
                "id": "Hedonism",
                "name": "Hedonism",
                "category": "values",
                "percentage": 0.026137131382594436,
                "sampling_error": 0.12827492344
              },
              {
                "id": "Self-enhancement",
                "name": "Self-enhancement",
                "category": "values",
                "percentage": 0.003975671239956735,
                "sampling_error": 0.09610910775999999
              },
              {
                "id": "Self-transcendence",
                "name": "Self-transcendence",
                "category": "values",
                "percentage": 0.5389075181041657,
                "sampling_error": 0.0736755658
              }
            ]
          }
        ]
      }
    ]
  },
  "warnings": []
}

console.log('Personality Similarity:', similarity(michelle, melania, 0))
console.log('Needs Similarity:', similarity(michelle, melania, 1))
console.log('Values Similarity:', similarity(michelle, melania, 2))