import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueueMusicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicRounded'
      short_name='QueueMusic'

      {...props}
    >
      <path d="M16 20Q14.75 20 13.875 19.125Q13 18.25 13 17Q13 15.75 13.875 14.875Q14.75 14 16 14Q16.275 14 16.525 14.037Q16.775 14.075 17 14.2V7Q17 6.575 17.288 6.287Q17.575 6 18 6H21Q21.425 6 21.712 6.287Q22 6.575 22 7Q22 7.425 21.712 7.713Q21.425 8 21 8H19V17Q19 18.25 18.125 19.125Q17.25 20 16 20ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H14Q14.425 6 14.713 6.287Q15 6.575 15 7Q15 7.425 14.713 7.713Q14.425 8 14 8ZM4 12Q3.575 12 3.288 11.712Q3 11.425 3 11Q3 10.575 3.288 10.287Q3.575 10 4 10H14Q14.425 10 14.713 10.287Q15 10.575 15 11Q15 11.425 14.713 11.712Q14.425 12 14 12ZM4 16Q3.575 16 3.288 15.712Q3 15.425 3 15Q3 14.575 3.288 14.287Q3.575 14 4 14H10Q10.425 14 10.713 14.287Q11 14.575 11 15Q11 15.425 10.713 15.712Q10.425 16 10 16Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicRounded.displayName = 'AmauiIconMaterialQueueMusicRounded';

export default IconMaterialQueueMusicRounded;
