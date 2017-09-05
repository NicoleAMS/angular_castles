import { Castle } from '../castles/castle.model';

export class CastleService {
    castles: Castle[] = [
        new Castle(
            'Acton Burnell Castle',
            ['http://www.virtual-shropshire.co.uk/bm~pix/acton-burnell-castle-02~s600x600.jpg',
            'http://www.virtual-shropshire.co.uk/gallery3/var/resizes/visitor-attractions/acton_burnell_castle/79hj_Dsc_0090.jpg?m=1406734250'],
            "Tucked away in a quiet part of Shropshire is the graceful red sandstone shell of Acton Burnell Castle. It was built between 1284 and 1293 by Bishop Burnell, Edward I's Lord Chancellor, and Parliaments were held here twice, in 1283 and 1285. By 1420, the castle was abandoned, and it was allowed to decay while a new house, Acton Burnell Hall, was built beside it. Nonetheless, the castle remains an impressive example of a medieval fortified manor house.",
            ['Free entry', 'Free entry', 'Free entry'],
            'Open during any reasonable daylight hours.',
            'Acton Burnell, Shrewsbury, Shropshire, SY5 7PE',
            'Shropshire, West Midlands'
        ),
        new Castle(
            'Barnard Castle',
            ['http://www.coolplaces.co.uk/system/images/13172/barnard-castle-see-do-buildings-monuments-large.jpg',
            'http://www.coolplaces.co.uk/system/images/13173/barnard-castle-see-do-buildings-monuments-large.jpg'
            ],
            "Set on a high rock above the River Tees, Barnard Castle takes its name from its 12th century founder, Bernard de Balliol. It was later developed by the Beauchamp family and then passed into the hands of Richard III. With fantastic views over the Tees Gorge this fortress sits on the fringe of an attractive working market town also known as ‘Barney’ so there is plenty to do for families on a day out. Try and spot Richard's boar emblem carved above a window in the inner ward or visit the 'sensory garden' of scented plants and tactile objects.",
            ['£5.40', '£3.20', 'Free entry'],
            'Every day from 10.00 till 18.00.',
            'Scar Top, Barnard Castle, Durham, DL12 8PR',
            'Durham, North East'
        ),
        new Castle(
            'Camber Castle',
            ['http://www.ryemuseum.co.uk/wp-content/uploads/2012/11/Camber-Castle-Aerial.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/b5/78/57/b57857ee2a2051f5e4a4247ad6e99b12.jpg'],
            "Enjoy a family guided tour around this historic castle built by Henry VIII. Camber Castle lies between Rye and Winchelsea. The ruin of an unusually unaltered artillery fort designed to guard the port of Rye. There are monthly guided walks round Rye Harbour Nature Reserve, including the castle and local farm.",
            ['£3.00', 'Free entry', 'Free entry'],
            'Open on the first Saturday of the month.',
            'Rye, East Sussex',
            'Rye, East Sussex'
        )
    ];
}

