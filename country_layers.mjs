export const country_layers = [
    {
        "id": "Disputed border",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "boundary",
        "minzoom": 0,
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(90, 35%, 45%)",
            "line-width": {
                "stops": [
                    [
                        1,
                        1.5
                    ],
                    [
                        5,
                        2.5
                    ],
                    [
                        10,
                        4
                    ]
                ]
            },
            "line-dasharray": [
                2,
                2
            ]
        },
        "filter": [
            "all",
            [
                "==",
                "admin_level",
                2
            ],
            [
                "==",
                "disputed",
                1
            ],
            [
                "==",
                "maritime",
                0
            ]
        ]
    },
    {
        "id": "Country border",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "boundary",
        "minzoom": 0,
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-blur": 0,
            "line-color": "hsl(120, 35%, 45%)",
            "line-width": {
                "stops": [
                    [
                        1,
                        1
                    ],
                    [
                        5,
                        2
                    ],
                    [
                        10,
                        3
                    ]
                ]
            }
        },
        "filter": [
            "all",
            [
                "==",
                "admin_level",
                2
            ],
            [
                "==",
                "disputed",
                0
            ],
            [
                "==",
                "maritime",
                0
            ]
        ]
    },


    {
        "id": "Country labels",
        "type": "symbol",
        "source": "maptiler_planet",
        "source-layer": "place",
        "minzoom": 1,
        "maxzoom": 12,
        "layout": {
            "text-font": [
                "Roboto Regular",
                "Noto Sans Regular"
            ],
            "text-size": [
                "interpolate",
                [
                    "linear",
                    1
                ],
                [
                    "zoom"
                ],
                0,
                8,
                1,
                10,
                4,
                [
                    "case",
                    [
                        ">",
                        [
                            "get",
                            "rank"
                        ],
                        2
                    ],
                    14,
                    17
                ],
                8,
                [
                    "case",
                    [
                        ">",
                        [
                            "get",
                            "rank"
                        ],
                        2
                    ],
                    19,
                    23
                ]
            ],
            "text-field": "{name:en}",
            "visibility": "visible",
            "text-padding": 1,
            "text-max-width": {
                "stops": [
                    [
                        1,
                        5
                    ],
                    [
                        5,
                        8
                    ]
                ]
            },
            "text-transform": "none",
            "text-allow-overlap": false,
            "text-letter-spacing": 0.07
        },
        "paint": {
            "text-color": "hsl(50, 7%, 18%)",
            "text-opacity": [
                "interpolate",
                [
                    "linear",
                    1
                ],
                [
                    "zoom"
                ],
                4,
                [
                    "case",
                    [
                        ">",
                        [
                            "get",
                            "rank"
                        ],
                        4
                    ],
                    0,
                    1
                ],
                5.9,
                [
                    "case",
                    [
                        ">",
                        [
                            "get",
                            "rank"
                        ],
                        4
                    ],
                    0,
                    1
                ],
                6,
                [
                    "case",
                    [
                        ">",
                        [
                            "get",
                            "rank"
                        ],
                        4
                    ],
                    1,
                    1
                ]
            ],
            "text-halo-blur": 1,
            "text-halo-color": "hsl(0,0%,100%)",
            "text-halo-width": 0.8
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "class",
                "country"
            ],
            [
                "has",
                "iso_a2"
            ]
        ]
    },
]