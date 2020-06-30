function buildGeometry() {
	var i;
	
	// Draws a cube (replace the vertices)
	var vert1 = [[-1.0,-1.0,-1.0], [1.0,-1.0,-1.0], [1.0,1.0,-1.0], 
	[-1.0,-1.0,-1.0], [1.0,1.0,-1.0], [-1.0, 1.0, -1.0],
	[-1.0,-1.0,-1.0], [-1.0,1.0,1.0], [-1.0, 1.0, -1.0],
	[1.0,1.0,-1.0], [-1.0,1.0,1.0], [-1.0, 1.0, -1.0],
	[1.0,1.0,-1.0], [1.0,1.0,1.0], [-1.0, 1.0, 1.0],
	[1.0,1.0,-1.0], [1.0,1.0,1.0], [1.0, -1.0, 1.0],
	[1.0,-1.0,1.0], [1.0,1.0,-1.0], [1.0, -1.0, -1.0],
	[-1.0,1.0,1.0], [1.0,1.0,1.0], [1.0, -1.0, 1.0],
	[1.0,-1.0,1.0], [-1.0,-1.0,1.0], [-1.0, 1.0, 1.0],
	[-1.0,-1.0,-1.0], [-1.0,-1.0,1.0], [-1.0, 1.0, 1.0],
	[-1.0,-1.0,-1.0], [-1.0,-1.0,1.0], [1.0, -1.0, 1.0],
	[1.0,-1.0,1.0], [-1.0,-1.0,-1.0], [1.0, -1.0, -1.0]
];

	addMesh(vert1, "L", [1.0, 0.0, 0.0]);


	// Draws a flat L-shaped pattern (replace the vertices)
	var vert2 = [
	[1.0,-1.0,0.0],[1.0,0.0,0.0],[0.0,-1.0,0.0] ,[0.0,0.0,0.0], [-1.0,-1.0,0.0],[-1.0,0.0,0.0],[0.0,0.0,0.0],[-1.0,1.0,0.0], [0.0,1.0,0.0],[-1.0,2.0,0.0],[0.0,2.0,0.0]
	];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


	// Draws a flat hexagon (replace the vertices)
	var r = 1;
	var a=Math.cos(Math.PI/3)*r;
	var b=Math.sin(Math.PI/3)*r;
	var vert3 = [[0.0,0.0,0.0],[r,0.0,0.0],[a,b,0.0],[-a,b,0.0],[-r,0.0,0.0],[-a,-b,0.0],[a,-b,0.0],[r,0.0,0.0]
	];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

