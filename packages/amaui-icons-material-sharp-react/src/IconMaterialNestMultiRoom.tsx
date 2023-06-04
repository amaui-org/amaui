import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestMultiRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoom'

      short_name='NestMultiRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm2-2h7v-3H6Zm9 0h3v-3h-3Zm-9-5h3v-2.975H6Zm5 0h7v-2.975h-7ZM7.3 9.025h9.4L12 5.5Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoom.displayName = 'AmauiIconMaterialNestMultiRoom';

export default IconMaterialNestMultiRoom;
