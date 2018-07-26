
import { vec3, vec4 } from 'gl-matrix';
import { Texture2 } from '../texture2';


export enum AlphaMode { OPAQUE, MASK, BLEND }

/**
 * Represents a material in a virtual 3D scene.
 * A material consists of a number of properties which describe
 * its visual representation. During rendering, a scene renderer
 * uses and interprets the values it finds in a material according
 * to its rendering process. It is not garuanteed whether or not
 * a scene renderer supports any of the material properties,
 * it may support some, all, or none.
 */
export class Material {

    baseColorFactor: vec4 = vec4.fromValues(1, 1, 1, 1);
    baseColorTexture: Texture2;
    baseColorTexCoord: number;
    metallicFactor = 1;
    roughnessFactor = 1;
    metallicRoughnessTexture: Texture2;
    metallicRoughnessTexCoord: number;

    normalTexture: Texture2;
    normalTexCoord: number;
    normalScale: number;

    occlusionTexture: Texture2;
    occlusionTexCoord: number;
    occlusionStrength: number;
    emissiveFactor: vec3 = vec3.fromValues(0, 0, 0);
    emissiveTexture: Texture2;
    emissiveTexCoord: number;

    alphaCutoff = 0.5;
    alphaMode: AlphaMode = AlphaMode.OPAQUE;

    doubleSided = false;

    /**
     * Default constructor
     */
    constructor() {
    }

}
