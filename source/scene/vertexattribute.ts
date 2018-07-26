
import { Buffer } from '../buffer';


export class VertexAttribute {
    constructor(
        public buffer: Buffer,
        private size: GLint,
        private type: GLenum,
        private normalized: boolean,
        private stride: GLsizei,
        private offset: GLintptr,
    ) {
    }

    enable(index: GLuint) {
        this.buffer.attribEnable(
            index,
            this.size,
            this.type,
            this.normalized,
            this.stride,
            this.offset,
            true,
            false,
        );
    }

    disable(index: GLuint) {
        this.buffer.attribDisable(index, false, true);
    }
}
