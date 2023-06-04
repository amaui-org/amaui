import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundDetectionGlassBreakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionGlassBreakW100'

      short_name='SoundDetectionGlassBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm.7-4.775L9.5 10.4l4.025 4.025L19 8.275V5H5ZM5 19h14V9.325l-5.525 6.2L9.5 11.55 5 16.075Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreakW100.displayName = 'AmauiIconMaterialSoundDetectionGlassBreakW100';

export default IconMaterialSoundDetectionGlassBreakW100;
