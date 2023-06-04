import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundDetectionGlassBreakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionGlassBreakFilled'

      short_name='SoundDetectionGlassBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-7 4.5-4.525 4 4L19 7.3V5H5Zm0 5h14v-8.7l-5.5 6.175-4-4L5 17Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreakFilled.displayName = 'AmauiIconMaterialSoundDetectionGlassBreakFilled';

export default IconMaterialSoundDetectionGlassBreakFilled;
