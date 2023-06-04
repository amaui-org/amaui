import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyFullscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreenFilled'

      short_name='MagnifyFullscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm480-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreenFilled.displayName = 'AmauiIconMaterialMagnifyFullscreenFilled';

export default IconMaterialMagnifyFullscreenFilled;
