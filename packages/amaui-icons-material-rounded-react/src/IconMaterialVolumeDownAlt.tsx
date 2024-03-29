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
      <path d="M6 15q-.425 0-.713-.288Q5 14.425 5 14v-4q0-.425.287-.713Q5.575 9 6 9h3l3.3-3.3q.475-.475 1.087-.213.613.263.613.938v11.15q0 .675-.613.937-.612.263-1.087-.212L9 15Zm10 1V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q17.125 15.475 16 16Zm-4-7.15L9.85 11H7v2h2.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownAlt.displayName = 'AmauiIconMaterialVolumeDownAlt';

export default IconMaterialVolumeDownAlt;
