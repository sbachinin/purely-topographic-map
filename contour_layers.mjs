const contour_filter = [
    "all",
    [
        "any",
        [
            "!has",
            "nth_line"
        ],
        [
            "in",
            "nth_line",
            1,3
        ]
    ],
    [
        "!has",
        "glacier"
    ]
]

export const contour_layers = [


    /* {
        "id": "Contour index",
        "type": "line",
        "source": "contours",
        "source-layer": "contour",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(22, 35%, 55%)",
            "line-width": 1.3,
            "line-opacity": {
                "stops": [
                    [
                        7,
                        0.2
                    ],
                    [
                        10,
                        0.6
                    ]
                ]
            }
        },
        "filter": [
            "==",
            [
                "in",
                "nth_line",
                5,
                10
            ],
            [
                "!has",
                "glacier"
            ]
        ]
    }, */
    // {
    //     "id": "Glacier contour index",
    //     "type": "line",
    //     "source": "contours",
    //     "source-layer": "contour",
    //     "layout": {
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": "hsl(192, 85%, 54%)",
    //         "line-width": 1.3,
    //         "line-opacity": {
    //             "stops": [
    //                 [
    //                     7,
    //                     0.2
    //                 ],
    //                 [
    //                     10,
    //                     0.6
    //                 ]
    //             ]
    //         }
    //     },
    //     "filter": [
    //         "all",
    //         [
    //             "in",
    //             "nth_line",
    //             5,
    //             10
    //         ],
    //         [
    //             "==",
    //             "glacier",
    //             1
    //         ]
    //     ]
    // },

    // {
    //     "id": "Glacier contour",
    //     "type": "line",
    //     "source": "contours",
    //     "source-layer": "contour",
    //     "layout": {
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": "hsl(192, 85%, 54%)",
    //         "line-width": 0.8,
    //         "line-opacity": 0.5
    //     },
    //     "filter": [
    //         "all",
    //         [
    //             "any",
    //             [
    //                 "!has",
    //                 "nth_line"
    //             ],
    //             [
    //                 "in",
    //                 "nth_line",
    //                 1,
    //                 2
    //             ]
    //         ],
    //         [
    //             "==",
    //             "glacier",
    //             1
    //         ]
    //     ]
    // },
    {
        "id": "Contour labels",
        "type": "symbol",
        "source": "contours",
        "source-layer": "contour",
        "layout": {
            "text-font": [
                "Noto Sans Regular"
            ],
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        15,
                        13
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            "text-field": "{height}",
            "visibility": "visible",
            "text-padding": 10,
            "symbol-placement": "line",
            "symbol-avoid-edges": true,
            "text-allow-overlap": false,
            "text-ignore-placement": false,
            "text-rotation-alignment": "map"
        },
        "paint": {
            "text-color": "hsl(23, 68%, 39%)",
            "text-halo-blur": 1,
            "text-halo-color": "#F2F2E6",
            "text-halo-width": 2
        },
        "metadata": {},
        "filter": contour_filter

    },
    // {
    //     "id": "Glacier contour labels",
    //     "type": "symbol",
    //     "source": "contours",
    //     "source-layer": "contour",
    //     "layout": {
    //         "text-font": [
    //             "Noto Sans Regular"
    //         ],
    //         "text-size": {
    //             "base": 1,
    //             "stops": [
    //                 [
    //                     15,
    //                     9.5
    //                 ],
    //                 [
    //                     20,
    //                     12
    //                 ]
    //             ]
    //         },
    //         "text-field": "{height}",
    //         "visibility": "visible",
    //         "text-padding": 10,
    //         "symbol-placement": "line",
    //         "symbol-avoid-edges": true,
    //         "text-allow-overlap": false,
    //         "text-ignore-placement": false,
    //         "text-rotation-alignment": "map"
    //     },
    //     "paint": {
    //         "text-color": "hsl(192, 85%, 38%)",
    //         "text-halo-blur": 1,
    //         "text-halo-color": "hsl(0,0%,100%)",
    //         "text-halo-width": 0.5
    //     },
    //     "metadata": {},
    //     "filter": [
    //         "all",
    //         [
    //             "==",
    //             "$type",
    //             "LineString"
    //         ],
    //         [
    //             "in",
    //             "nth_line",
    //             10,
    //             5
    //         ],
    //         [
    //             ">",
    //             "height",
    //             0
    //         ],
    //         [
    //             "==",
    //             "glacier",
    //             1
    //         ]
    //     ]
    // },


    {
        "id": "Contour",
        "type": "line",
        "source": "contours",
        "source-layer": "contour",
        "minzoom": 0,
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(23, 88%, 29%)",
            "line-width": 1,
            "line-opacity": 0.5
        },
        
        "filter": contour_filter
    }
]