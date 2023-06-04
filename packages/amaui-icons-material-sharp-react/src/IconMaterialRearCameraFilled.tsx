import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRearCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RearCameraFilled'

      short_name='RearCamera'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 416q17 0 28.5-11.5T700 376q0-17-11.5-28.5T660 336q-17 0-28.5 11.5T620 376q0 17 11.5 28.5T660 416ZM520 856h280V296H520v560ZM80 936V616h168l-64 64 56 56 160-160-160-160-56 56 64 64H80V216h800v720H80Z"/>
    </Icon>
  );
});

IconMaterialRearCameraFilled.displayName = 'AmauiIconMaterialRearCameraFilled';

export default IconMaterialRearCameraFilled;
