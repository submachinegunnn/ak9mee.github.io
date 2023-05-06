self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'goproxy/uv/uv.handler.js',
    bundle: 'goproxy/uv/uv.bundle.js',
    config: 'goproxy/uv/uv.config.js',
    sw: 'goproxy/uv/uv.sw.js',
};
