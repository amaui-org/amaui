import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOffW100'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-360Zm0 0ZM852-68 90-830l20-20L872-88l-20 20ZM660-360Zm0 0Zm.11 228Q590-132 541-180.87 492-229.75 492-300v-120q0-11.5 1-21.75t4-21.25l77 77h-54v86q0 58 41 99t99 41q29 0 54.5-11t44.5-30l20 20q-22.86 22.62-53.35 35.81Q695.17-132 660.11-132ZM821-251l-23-23q2-6 2-12.47V-386H686l-40-40v-133q-27 3-49.5 14.5T557-515l-20-20q23-25 54.64-39T660-588q70.25 0 119.13 48.87Q828-490.25 828-420v120q0 13.04-1.5 25.52T821-251ZM674-414h126q0-57-34.5-98T674-559v145ZM420-540ZM132-212v-536h80l28 28h-80v480h239q2 8 4 14.5t4 13.5H132Zm220-508-28-28h504v28H352Zm115 115Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOffW100.displayName = 'AmauiIconMaterialTouchpadMouseOffW100';

export default IconMaterialTouchpadMouseOffW100;
