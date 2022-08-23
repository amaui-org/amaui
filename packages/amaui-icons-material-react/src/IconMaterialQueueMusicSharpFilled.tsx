import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueueMusicSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicSharpFilled'
      short_name='QueueMusic'

      {...props}
    >
      <path d="M16 20Q14.75 20 13.875 19.125Q13 18.25 13 17Q13 15.75 13.875 14.875Q14.75 14 16 14Q16.275 14 16.525 14.037Q16.775 14.075 17 14.2V6H22V8H19V17Q19 18.25 18.125 19.125Q17.25 20 16 20ZM3 8V6H15V8ZM3 12V10H15V12ZM3 16V14H11V16Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicSharpFilled.displayName = 'AmauiIconMaterialQueueMusicSharpFilled';

export default IconMaterialQueueMusicSharpFilled;
