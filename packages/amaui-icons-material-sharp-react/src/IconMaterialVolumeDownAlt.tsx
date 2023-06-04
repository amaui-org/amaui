import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAlt'

      short_name='VolumeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15V9h4l5-5v16l-5-5Zm11 1V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q17.125 15.475 16 16Zm-4-7.15L9.85 11H7v2h2.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAlt.displayName = 'AmauiIconMaterialVolumeDownAlt';

export default IconMaterialVolumeDownAlt;
