import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSoundDetectionGlassBreakSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionGlassBreakSharp'
      short_name='SoundDetectionGlassBreak'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 14 9.5 9.475 13.5 13.475 19 7.3V5H5ZM5 19H19V10.3L13.5 16.475L9.5 12.475L5 17Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreakSharp.displayName = 'AmauiIconMaterialSoundDetectionGlassBreakSharp';

export default IconMaterialSoundDetectionGlassBreakSharp;
