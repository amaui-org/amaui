import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatInfoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfoFilled'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm-40 320h80v-240h-80v240ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialChatInfoFilled.displayName = 'AmauiIconMaterialChatInfoFilled';

export default IconMaterialChatInfoFilled;
