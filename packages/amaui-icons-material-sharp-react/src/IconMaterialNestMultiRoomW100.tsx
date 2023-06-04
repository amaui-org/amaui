import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestMultiRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomW100'

      short_name='NestMultiRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.625l6.7 5.025V19.7ZM6 19h7.65v-3.975H6Zm8.35 0H18v-3.975h-3.65ZM6 14.325h3.65V10.35H6Zm4.35 0H18V10.35h-7.65Zm-3.925-4.65h11.15L12 5.5Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomW100.displayName = 'AmauiIconMaterialNestMultiRoomW100';

export default IconMaterialNestMultiRoomW100;
