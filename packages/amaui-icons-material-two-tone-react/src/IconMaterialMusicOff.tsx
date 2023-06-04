import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOff'

      short_name='MusicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="10" cy="17" opacity=".3" r="2"/><path d="M14 7h4V3h-6v4.61l2 2zm-2 3.44L4.41 2.86 3 4.27l9 9v.28c-.94-.54-2.1-.75-3.33-.32-1.34.48-2.37 1.67-2.61 3.07-.46 2.74 1.86 5.08 4.59 4.65 1.96-.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41L12 10.44zM10 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </Icon>
  );
});

IconMaterialMusicOff.displayName = 'AmauiIconMaterialMusicOff';

export default IconMaterialMusicOff;
