const road_color = "hsl(267, 83%, 72%)"

export const transport_layers = [

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
    // {
    //     "id": "Tunnel outline",
    //     "type": "line",
    //     "source": "maptiler_planet",
    //     "source-layer": "transportation",
    //     "minzoom": 6.5,
    //     "layout": {
    //         "line-cap": "butt",
    //         "line-join": "round",
    //         "visibility": "visible"
    //     },
    //     "paint": {
    //         "line-color": [
    //             "match",
    //             [
    //                 "get",
    //                 "class"
    //             ],
    //             "motorway",
    //             "hsl(28,72%,69%)",
    //             [
    //                 "trunk",
    //                 "primary"
    //             ],
    //             "hsl(26, 56%, 68%)",
    //             "hsl(36,5%,80%)"
    //         ],
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
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 2,
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
    //                 [
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 3,
    //                 [
    //                     "secondary",
    //                     "tertiary"
    //                 ],
    //                 2,
    //                 [
    //                     "minor",
    //                     "service",
    //                     "track"
    //                 ],
    //                 1,
    //                 0.5
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
    //                 [
    //                     "trunk"
    //                 ],
    //                 4,
    //                 [
    //                     "primary"
    //                 ],
    //                 6,
    //                 [
    //                     "secondary"
    //                 ],
    //                 6,
    //                 [
    //                     "tertiary"
    //                 ],
    //                 4,
    //                 [
    //                     "minor",
    //                     "service",
    //                     "track"
    //                 ],
    //                 3,
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
    //                     "motorway",
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 10,
    //                 [
    //                     "secondary"
    //                 ],
    //                 8,
    //                 [
    //                     "tertiary"
    //                 ],
    //                 8,
    //                 [
    //                     "minor",
    //                     "service",
    //                     "track"
    //                 ],
    //                 4,
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
    //                     "motorway",
    //                     "trunk",
    //                     "primary"
    //                 ],
    //                 26,
    //                 [
    //                     "secondary"
    //                 ],
    //                 26,
    //                 [
    //                     "tertiary"
    //                 ],
    //                 26,
    //                 [
    //                     "minor",
    //                     "service",
    //                     "track"
    //                 ],
    //                 18,
    //                 18
    //             ]
    //         ],
    //         "line-dasharray": [
    //             0.5,
    //             0.25
    //         ]
    //     },
    //     "metadata": {},
    //     "filter": [
    //         "all",
    //         [
    //             "==",
    //             "brunnel",
    //             "tunnel"
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
    //                 "motorway",
    //                 "path_construction",
    //                 "primary",
    //                 "raceway",
    //                 "raceway_construction",
    //                 "secondary",
    //                 "service",
    //                 "storage_tank",
    //                 "tertiary",
    //                 "track",
    //                 "trunk"
    //             ]
    //         ]
    //     ]
    // },
    {
        "id": "Tunnel",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 6.5,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(300, 100%, 76%)",
            "line-width": [
                "interpolate",
                [
                    "linear",
                    2
                ],
                [
                    "zoom"
                ],
                5,
                0,
                6,
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
                        1
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    0,
                    0
                ],
                10,
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
                        0,
                        2.5
                    ],
                    [
                        "trunk",
                        "primary"
                    ],
                    1.5,
                    1
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
                        1,
                        4
                    ],
                    [
                        "trunk"
                    ],
                    2.5,
                    [
                        "primary"
                    ],
                    2.5,
                    [
                        "secondary",
                        "tertiary"
                    ],
                    1.5,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    1,
                    1
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
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        1,
                        5,
                        6
                    ],
                    [
                        "trunk"
                    ],
                    3,
                    [
                        "primary"
                    ],
                    5,
                    [
                        "secondary"
                    ],
                    4,
                    [
                        "tertiary"
                    ],
                    3,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    2,
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
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    8,
                    [
                        "secondary"
                    ],
                    7,
                    [
                        "tertiary"
                    ],
                    6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    4,
                    4
                ],
                20,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "motorway",
                        "trunk",
                        "primary"
                    ],
                    24,
                    [
                        "secondary"
                    ],
                    24,
                    [
                        "tertiary"
                    ],
                    24,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    16,
                    16
                ]
            ],
            "line-opacity": 1
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
                "brunnel",
                "tunnel"
            ],
            [
                "!in",
                "class",
                "ferry",
                "rail",
                "transit",
                "pier",
                "bridge",
                "path",
                "aerialway",
                "motorway_construction",
                "trunk_construction",
                "primary_construction",
                "secondary_construction",
                "tertiary_construction",
                "minor_construction",
                "service_construction",
                "track_construction"
            ]
        ]
    }, 
    {
        "id": "Railway tunnel",
        "type": "line",
        "minzoom": 8,
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsl(300,70%,63%)",
            "line-width": {
                "base": 2.8,
                "stops": [
                    [
                        14,
                        4
                    ],
                    [
                        15,
                        7.5
                    ],
                    [
                        20,
                        10
                    ]
                ]
            },
            "line-opacity": 0.4
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
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
        "id": "Railway tunnel hatching",
        "type": "line",
        "minzoom": 8,
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
                        3
                    ],
                    [
                        20,
                        8
                    ]
                ]
            },
            "line-opacity": 0.5,
            "line-dasharray": [
                0.2,
                8
            ]
        },
        "metadata": {},
        "filter": [
            "all",
            [
                "==",
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
        "id": "Tunnel path",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 12,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": "hsla(0,0%,63%,0.45)",
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        14,
                        0.5
                    ],
                    [
                        16,
                        1
                    ],
                    [
                        18,
                        2
                    ],
                    [
                        22,
                        5
                    ]
                ]
            },
            "line-opacity": 1,
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
                "class",
                "path"
            ],
            [
                "==",
                "brunnel",
                "tunnel"
            ]
        ]
    },
    {
        "id": "Bridge",
        "type": "fill",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsla(42, 49%, 93%, 0.6)",
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
                "brunnel",
                "bridge"
            ]
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
        "minzoom": 13,
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


                13,
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
                    6,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    3,
                    3
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
                    24,
                    [
                        "minor",
                        "service",
                        "track"
                    ],
                    12,
                    12
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
        "minzoom": 8,
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
                8,
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
                    1,
                    [
                        "match",
                        [
                            "get",
                            "class"
                        ],
                        [
                            "primary"
                        ],
                        0.5,
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
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    2.5,
                    [
                        "primary"
                    ],
                    2.5,
                    1.5
                ],
                14,
                [
                    "match",
                    [
                        "get",
                        "class"
                    ],
                    [
                        "trunk"
                    ],
                    3,
                    [
                        "primary"
                    ],
                    5,
                    4
                ],
                16,
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
                    4,
                    4
                ],
                20,
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
                    24,
                    24
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
        "minzoom": 8,
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
                8,
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
                        3
                    ],
                    0
                ],
                10,
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
                        2,
                        0,
                        3.2
                    ],
                    2
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
                        2,
                        2,
                        6
                    ],
                    1.4
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
                    [
                        "match",
                        [
                            "get",
                            "ramp"
                        ],
                        2,
                        5,
                        6
                    ],
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
                    8,
                    2.4
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
                    24,
                    16
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
            "line-color": {
                "stops": [
                    [
                        6,
                        "hsl(0, 0%, 60%)"
                    ],
                    [
                        18,
                        "hsl(0, 0%, 51%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.2,
                "stops": [
                    [
                        14,
                        0.5
                    ],
                    [
                        22,
                        3
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
            "line-color": "hsl(30,70%,72%)",
            "line-width": {
                "base": 2.8,
                "stops": [
                    [
                        14,
                        4.8
                    ],
                    [
                        15,
                        10
                    ],
                    [
                        20,
                        16
                    ]
                ]
            },
            "line-opacity": 0.5
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
            "line-color": "hsl(0,0%,72%)",
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
            "line-opacity": [
                "match",
                [
                    "get",
                    "service"
                ],
                "yard",
                0.5,
                1
            ],
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
            "line-color": "hsl(0,0%,73%)",
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