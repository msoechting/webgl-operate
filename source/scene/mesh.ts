
import { Aabb3 } from './aabb3';
import { Geometry } from './geometry';


/**
 * A mesh is a virtual 3D object which can be rendered.
 * It consists of the geometry data (vertex and index buffers),
 * and references materials.
 */
export class Mesh {

    name: string;
    geometries: Geometry[];
    bounds: Aabb3 = new Aabb3();

    /**
     * Default constructor
     */
    constructor() {
    }

}
