
import { Buffer } from '../buffer';
import { VertexArray } from '../vertexarray';
import { Material } from './material';
import { VertexAttribute } from './vertexattribute';


export enum ShaderFlags {
    // vertex shader + fragment shader
    HAS_NORMALS = 1,
    HAS_TANGENTS = 1 << 1,
    HAS_UV = 1 << 2,
    HAS_COLORS = 1 << 3,

    // fragment shader only
    USE_IBL = 1 << 4,
    HAS_BASECOLORMAP = 1 << 5,
    HAS_NORMALMAP = 1 << 6,
    HAS_EMISSIVEMAP = 1 << 7,
    HAS_METALROUGHNESSMAP = 1 << 8,
    HAS_OCCLUSIONMAP = 1 << 9,
    USE_TEX_LOD = 1 << 10,
}


/**
 * A geometry defines a part of a mesh, e.g., a list of triangles or strips.
 */
export class Geometry {

    public identifier: string;

    public vertexArray: VertexArray;
    public numVertices: number;

    public indexBuffer: Buffer;
    public indexByteOffset: number;
    public numIndices: number;
    public indexType: GLenum; // gl.UNSIGNED_INT, ...

    public attributes: { [semantic: string]: VertexAttribute } = {};

    public mode: GLenum; // gl.TRIANGLES, ...
    public shaderFlags: ShaderFlags;
    public material: Material;

    /**
     * Default constructor
     */
    constructor(identifier: string | undefined = 'Primitive') {
        this.identifier = identifier;
    }

}
