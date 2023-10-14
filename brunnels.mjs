const tunnel_color = "hsl(0, 0%, 47%)"

export const brunnels = [
    {
        "id": "Tunnel",
        "type": "line",
        "source": "maptiler_planet",
        "source-layer": "transportation",
        "minzoom": 8,
        "layout": {
            "line-cap": "butt",
            "line-join": "round",
            "visibility": "visible"
        },
        "paint": {
            "line-color": tunnel_color,
            "line-width": [
                "interpolate",
                ["linear",2],
                ["zoom"],
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
            "line-color": tunnel_color,
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
            "line-color": tunnel_color,
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
            "line-opacity": 1,
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

    // {
    //     "id": "Tunnel outline",
    //     "type": "line",
    //     "source": "maptiler_planet",
    //     "source-layer": "transportation",
    //     "minzoom": 8,
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
]