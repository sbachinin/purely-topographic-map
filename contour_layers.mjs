const line_filter = [
    "any",
    [
        "!has",
        "nth_line"
    ],
    [
        "in",
        "nth_line",
        1,
        2
    ]
]


const label_filter = [
    "any",
    [
        "!has",
        "nth_line"
    ],
    [
        "in",
        "nth_line",
        10
    ]
]

const text_size = {
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
}


const shared_contour_props = {
    "minzoom": 10.5,
    "source": "contours",
    "source-layer": "contour",
}

export const contour_layers = [


    {
        "id": "Contour thick",
        ...shared_contour_props,
        "type": "line",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 62%)",
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
            "all",
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
    },

    {
        "id": "Glacier contour thick",
        ...shared_contour_props,
        "type": "line",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(192, 85%, 54%)",
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
            "all",
            [
                "in",
                "nth_line",
                5,
                10
            ],
            [
                "==",
                "glacier",
                1
            ]
        ]
    },

    {
        "id": "Glacier contour",
        ...shared_contour_props,
        "type": "line",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(192, 85%, 54%)",
            "line-width": 0.8,
            "line-opacity": 0.5
        },


        "filter": [
            "all",
            line_filter,
            [
                "==",
                "glacier",
                1
            ]
        ]
    },





    {
        "id": "Contour labels",
        ...shared_contour_props,
        "type": "symbol",
        "layout": {
            "text-font": [
                "Noto Sans Regular"
            ],
            "text-size": text_size,
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
            "text-color": "hsl(9, 16%, 32%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsl(349, 0%, 99%)",
            "text-halo-width": 1.5
        },
        "metadata": {},
        "filter": [
            "all",
            label_filter,
            [
                "!has",
                "glacier"
            ]
        ]

    },



    {
        "id": "Glacier contour labels",
        ...shared_contour_props,
        "type": "symbol",
        "layout": {
            "text-font": [
                "Noto Sans Regular"
            ],
            "text-size": text_size,
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
            "text-color": "hsl(192, 85%, 38%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsl(0,0%,100%)",
            "text-halo-width": 0.5
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "$type",
                "LineString"
            ],
            [
                "in",
                "nth_line",
                10
            ],
            [
                ">",
                "height",
                0
            ],
            [
                "==",
                "glacier",
                1
            ]
        ]
    },


    {
        "id": "Contour",
        ...shared_contour_props,
        "type": "line",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 62%)",
            "line-width": 0.8,
            "line-opacity": 0.5
        },

        "filter": [
            "all",
            line_filter,
            [
                "!has",
                "glacier"
            ]
        ]
    }
]