const road_color = "hsl(267, 83%, 72%)"
const railway_color = "hsl(30, 57%, 69%)"
import { brunnels } from './brunnels.mjs'

export const transport_layers = [

    ...brunnels,

    {
        "id": "Runway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "aeroway",
        "minzoom": 11,
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        11,
                        3
                    ],
                    [
                        20,
                        16
                    ]
                ]
            }
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
                "==",
                "class",
                "runway"
            ]
        ]
    },
    {
        "id": "Taxiway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "aeroway",
        "minzoom": 11,
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        11,
                        0.5
                    ],
                    [
                        20,
                        6
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "==",
            "class",
            "taxiway"
        ]
    },
    {
        "id": "Ferry",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(201, 59%, 45%)",
            "line-width": 1.1,
            "line-dasharray": [
                2,
                2
            ]
        },
        "filter": [
            "==",
            "class",
            "ferry"
        ]
    },

    {
        "id": "Pier",
        "type": "fill",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(47, 16%, 89%)",
            "fill-antialias": true
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "$type",
                "Polygon"
            ],
            [
                "==",
                "class",
                "pier"
            ]
        ]
    },
    {
        "id": "Pier road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(47, 16%, 89%)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        13,
                        0.5
                    ],
                    [
                        15,
                        1
                    ],
                    [
                        18,
                        4
                    ]
                ]
            }
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
                "class",
                "pier"
            ]
        ]
    },



    // {
    //     "id": "Minor road outline",
    //     "type": "line",
    //     "source": "maptiler_planet",
    //     "source-layer": "transportation",
    //     "minzoom": 10,
    //     "maxzoom": 24,
    //     "layout": {
    //         "line-cap": "butt",
    //         "line-join": "round",
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": "transparent",
    //         "line-opacity": 0
    //     },
    //     "metadata": {},
    //     "filter": [
    //         "all",
    //         [
    //             "any",
    //             [
    //                 "!has",
    //                 "brunnel"
    //             ],
    //             [
    //                 "in",
    //                 "brunnel",
    //                 "bridge",
    //                 "ford"
    //             ]
    //         ],
    //         [
    //             "any",
    //             [
    //                 "!has",
    //                 "class"
    //             ],
    //             [
    //                 "in",
    //                 "class",
    //                 "bus_guideway",
    //                 "busway",
    //                 "courtyard",
    //                 "minor",
    //                 "path_construction",
    //                 "raceway",
    //                 "raceway_construction",
    //                 "secondary",
    //                 "service",
    //                 "storage_tank",
    //                 "tertiary",
    //                 "track"
    //             ]
    //         ]
    //     ]
    // },


    // {
    //     "id": "Major road outline",
    //     "type": "line",
    //     "source": "maptiler_planet",
    //     "source-layer": "transportation",
    //     "minzoom": 4,
    //     "layout": {
    //         "line-cap": "butt",
    //         "line-join": "round",
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": "hsl(28, 72%, 69%)",
    //         "line-width": [
    //             "interpolate",
    //             [
    //                 "linear",
    //                 2
    //             ],
    //             [
    //                 "zoom"
    //             ],
    //             6,
    //             0,
    //             7,
    //             0.5,
    //             10,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 2.4,
    //                 0
    //             ],
    //             12,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 3,
    //                 0.7
    //             ],
    //             14,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "trunk"
    //                 ],
    //                 4,
    //                 [
    //                     "primary"
    //                 ],
    //                 6,
    //                 3
    //             ],
    //             16,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 10,
    //                 4
    //             ],
    //             20,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 26,
    //                 17
    //             ]
    //         ],
    //         "line-opacity": 1
    //     },
    //     "metadata": {},
    //     "filter": [
    //         "all",
    //         [
    //             "any",
    //             [
    //                 "!has",
    //                 "brunnel"
    //             ],
    //             [
    //                 "in",
    //                 "brunnel",
    //                 "bridge",
    //                 "ford"
    //             ]
    //         ],
    //         [
    //             "in",
    //             "class",
    //             "primary",
    //             "trunk"
    //         ]
    //     ]
    // },


    // {
    //     "id": "Highway outline",
    //     "type": "line",
    //     "source": "maptiler_planet",
    //     "source-layer": "transportation",
    //     "minzoom": 4,
    //     "layout": {
    //         "line-cap": "butt",
    //         "line-join": "round",
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": "hsl(25, 75%, 61%)",
    //         "line-width": [
    //             "interpolate",
    //             [
    //                 "linear",
    //                 2
    //             ],
    //             [
    //                 "zoom"
    //             ],
    //             6,
    //             0,
    //             7,
    //             0.5,
    //             10,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "motorway"
    //                 ],
    //                 [
    //                     "match",
    //                     [
    //                         "get",
    //                         "ramp"
    //                     ],
    //                     1,
    //                     0,
    //                     2.5
    //                 ],
    //                 0
    //             ],
    //             12,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "motorway"
    //                 ],
    //                 [
    //                     "match",
    //                     [
    //                         "get",
    //                         "ramp"
    //                     ],
    //                     1,
    //                     2,
    //                     6
    //                 ],
    //                 0.7
    //             ],
    //             14,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "motorway"
    //                 ],
    //                 [
    //                     "match",
    //                     [
    //                         "get",
    //                         "ramp"
    //                     ],
    //                     1,
    //                     5,
    //                     8
    //                 ],
    //                 3
    //             ],
    //             16,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "motorway"
    //                 ],
    //                 10,
    //                 4
    //             ],
    //             20,
    //             [
    //                 "match",
    //                 [
    //                     "get",
    //                     "class"
    //                 ],
    //                 [
    //                     "motorway"
    //                 ],
    //                 26,
    //                 17
    //             ]
    //         ],
    //         "line-opacity": 1
    //     },
    //     "metadata": {},
    //     "filter": [
    //         "all",
    //         [
    //             "any",
    //             [
    //                 "!has",
    //                 "brunnel"
    //             ],
    //             [
    //                 "in",
    //                 "brunnel",
    //                 "bridge",
    //                 "ford"
    //             ]
    //         ],
    //         [
    //             "==",
    //             "class",
    //             "motorway"
    //         ]
    //     ]
    // },


    {
        "id": "Minor road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 12,
        "maxzoom": 24,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": road_color, // `hsla(0, 0%, ${road_lum}, ${road_opa})`,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],


                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    1.6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    1,
                    1
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    3.5,
                    2
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "tertiary"
                    ],
                    8,
                    6
                ]
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "any",
                [
                    "!has",
                    "class"
                ],
                [
                    "in",
                    "class",
                    "bus_guideway",
                    "busway",
                    "courtyard",
                    "minor",
                    "path_construction",
                    "raceway",
                    "raceway_construction",
                    "service",
                    "storage_tank",
                    "tertiary",
                    "track"
                ]
            ]
        ]
    },
    {
        "id": "Major road",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 7,
        "maxzoom": 24,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": road_color, // `#EF8DD0`,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                7,
                [
                    // if trunk, 1
                    // if primary, 0.5
                    // else 0
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    0.8,
                    [
                        "match",
                        [
                            "get",
                            "class"
                        ],
                        [
                            "primary"
                        ],
                        0.4,
                        0
                    ]

                ],
                10,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    1.5,
                    1
                ],
                12,
                2.5,
                16,
                4,
                20,
                10
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "in",
                "class",
                "primary",
                "secondary",
                "trunk"
            ]
        ]
    },
    {
        "id": "Highway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 7,
        "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": road_color,
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                7,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "brunnel"
                        ],
                        [
                            "bridge"
                        ],
                        0,
                        1.2
                    ],
                    0
                ],
                12,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        1.5,
                        3
                    ],
                    1.2
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    4,
                    2
                ],
                16,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    5,
                    1.4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway"
                    ],
                    14,
                    9
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "any",
                [
                    "!has",
                    "brunnel"
                ],
                [
                    "in",
                    "brunnel",
                    "bridge",
                    "ford"
                ]
            ],
            [
                "==",
                "class",
                "motorway"
            ]
        ]
    },
    {
        "id": "Path",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 12,
        "layout": {
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": road_color,
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        14,
                        1
                    ],
                    [
                        22,
                        4
                    ]
                ]
            },
            "line-dasharray": [
                3,
                2
            ]
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
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "in",
                "class",
                "path",
                "pedestrian"
            ]
        ]
    },
    {
        "id": "Major railway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": railway_color,
            "line-width": {
                "base": 2.8,
                "stops": [
                    [
                        8,
                        2
                    ],
                    [
                        14,
                        3
                    ],
                    [
                        15,
                        6
                    ],
                    [
                        20,
                        10
                    ]
                ]
            },
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Major railway hatching",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": railway_color,
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14.5,
                        0
                    ],
                    [
                        15,
                        3
                    ],
                    [
                        20,
                        8
                    ]
                ]
            },
            "line-dasharray": [
                0.2,
                9
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "!in",
                "brunnel",
                "tunnel"
            ],
            [
                "==",
                "class",
                "rail"
            ]
        ]
    },
    {
        "id": "Minor railway",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": railway_color,
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14,
                        0.4
                    ],
                    [
                        15,
                        0.75
                    ],
                    [
                        20,
                        2
                    ]
                ]
            }
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "in",
                "subclass",
                "tram",
                "light_rail"
            ]
        ]
    },
    {
        "id": "Minor railway hatching",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(0,0%,73%)",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        14.5,
                        0
                    ],
                    [
                        15,
                        2
                    ],
                    [
                        20,
                        6
                    ]
                ]
            },
            "line-dasharray": [
                0.2,
                4
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "in",
                "subclass",
                "tram",
                "light_rail"
            ]
        ]
    }
]