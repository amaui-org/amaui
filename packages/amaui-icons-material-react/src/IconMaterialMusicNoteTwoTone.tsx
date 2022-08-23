import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicNoteTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicNoteTwoTone'
      short_name='MusicNote'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="10.01" cy="17" opacity=".3" r="2"/><path d="M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </Icon>
  );
});

IconMaterialMusicNoteTwoTone.displayName = 'AmauiIconMaterialMusicNoteTwoTone';

export default IconMaterialMusicNoteTwoTone;
