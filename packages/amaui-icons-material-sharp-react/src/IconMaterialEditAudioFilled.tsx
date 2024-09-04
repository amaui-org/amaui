import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAudioFilled'

      short_name='EditAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80 80-240l160-160 57 56-64 64h494l-63-64 56-56 160 160L720-80l-57-56 64-64H233l63 64-56 56Zm200-360v-480h80v480h-80Zm-160-80v-320h80v320h-80Zm320 0v-320h80v320h-80ZM120-620v-120h80v120h-80Zm640 0v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterialEditAudioFilled.displayName = 'AmauiIconMaterialEditAudioFilled';

export default IconMaterialEditAudioFilled;
