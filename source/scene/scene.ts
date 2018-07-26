
import { Node } from './node';


/**
 * Virtual 3D scene that is organized as a hierarchical collection of nodes.
 * Note that a scene is a description of a virtual world, i.e., it contains
 * the position (transformation), appearance, and behavior of objects in a
 * virtual 3D world and describes their hierarchical relations to each other.
 * The scene, however, is not meant as a way to describe or organize rendering
 * processes (in contrast to typical 'scene graph' structures as found in many
 * rendering engines). Therefore, the scene does not describe, control, or interfere
 * in any way with the rendering process, nor do the scene or its nodes contain
 * any rendering logic. To render a scene, a scene renderer is used, which traverses
 * a scene and performs the necessary rendering steps to convert a scene into
 * a rendered image
 */
export class Scene {

    /** @see {@link nodes} */
    protected _nodes: Node[];

    /** @see {@link rootNodes} */
    protected _rootNodes: Node[];


    /**
     * Default constructor
     */
    constructor() {
    }

    /**
     * Returns the list of all nodes in the scene.
     */
    get nodes(): Node[] {
        return this._nodes;
    }

    /**
     * Returns the list of root nodes in the scene.
     */
    get rootNodes(): Node[] {
        return this._rootNodes;
    }
}
