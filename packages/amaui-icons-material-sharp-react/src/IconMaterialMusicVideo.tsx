import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideo'

      short_name='MusicVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2V6ZM4 6v12h16V6Zm6.5 11q1.05 0 1.775-.725Q13 15.55 13 14.5V9h3V7h-4v5.5q-.325-.225-.7-.363-.375-.137-.8-.137-1.05 0-1.775.725Q8 13.45 8 14.5q0 1.05.725 1.775Q9.45 17 10.5 17Z"/>
    </Icon>
  );
});

IconMaterialMusicVideo.displayName = 'AmauiIconMaterialMusicVideo';

export default IconMaterialMusicVideo;
