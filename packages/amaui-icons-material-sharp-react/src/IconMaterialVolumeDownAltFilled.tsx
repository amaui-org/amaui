import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltFilled'

      short_name='VolumeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14 20-5-5H5V9h4l5-5Zm2-4V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q17.125 15.475 16 16Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAltFilled.displayName = 'AmauiIconMaterialVolumeDownAltFilled';

export default IconMaterialVolumeDownAltFilled;
