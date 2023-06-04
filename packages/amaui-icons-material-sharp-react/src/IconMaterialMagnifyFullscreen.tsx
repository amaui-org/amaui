import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyFullscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreen'

      short_name='MagnifyFullscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm80-80h640V336H160v480Zm0 0V336v480Zm400-160h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreen.displayName = 'AmauiIconMaterialMagnifyFullscreen';

export default IconMaterialMagnifyFullscreen;
