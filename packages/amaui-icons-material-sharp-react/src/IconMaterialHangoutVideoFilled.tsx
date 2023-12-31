import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoFilled'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h320v-128l160 128v-320L560-512v-128H240v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoFilled.displayName = 'AmauiIconMaterialHangoutVideoFilled';

export default IconMaterialHangoutVideoFilled;
