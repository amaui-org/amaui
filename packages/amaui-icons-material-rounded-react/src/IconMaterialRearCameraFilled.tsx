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
      <path d="M660 416q17 0 28.5-11.5T700 376q0-17-11.5-28.5T660 336q-17 0-28.5 11.5T620 376q0 17 11.5 28.5T660 416ZM520 856h280V296H520v560Zm-360 80q-33 0-56.5-23.5T80 856V616h168l-36 36q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L268 444q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H80V296q0-33 23.5-56.5T160 216h640q33 0 56.5 23.5T880 296v560q0 33-23.5 56.5T800 936H160Z"/>
    </Icon>
  );
});

IconMaterialRearCameraFilled.displayName = 'AmauiIconMaterialRearCameraFilled';

export default IconMaterialRearCameraFilled;
