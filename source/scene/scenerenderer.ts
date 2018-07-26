
import { Scene } from './scene';


/**
 * A scene renderer is responsible for rendering a scene onto the screen.
 * It is supposed to process the nodes of a scene and perform the appropriate
 * rendering steps to visualize the nodes on the screen.
 * There can be many different implementations for a scene renderer,
 * e.g., forward rendering vs. deferred rendering, therefore the scene does
 * not make any assumption about how it is rendered. It is the resonsibility
 * of the scene renderer to interpret the scene nodes, and certain renderers
 * may or may not support any of the properties of certain scene node types
 * (e.g., materials or other options).
 */
export class SceneRenderer {

    /**
     * Default constructor
     */
    constructor() {
    }

    /**
     * Render a scene
     */
    render(scene: Scene) {
    }

}
