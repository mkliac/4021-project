const Bomb = function(ctx, x, y) {

    const sequences = {
        constant:  { x: 64, y:  112, width: 16, height: 16, count: 9, timing: 50, loop: true },
    };

    const sprite = Sprite(ctx, x, y);

    sprite.setSequence(sequences.constant)
          .setScale(2)
          .setShadowScale({ x: 0.75, y: 0.2 })
          .useSheet("resources/object_sprites.png");

    // The methods are returned as an object here.
    return {
        getXY: sprite.getXY,
        setXY: sprite.setXY,
        getBoundingBox: sprite.getBoundingBox,
        draw: sprite.draw,
        update: sprite.update
    };
};