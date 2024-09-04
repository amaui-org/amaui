import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscape2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscape2Filled'

      short_name='FloatLandscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400h200v-240H520v240ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape2Filled.displayName = 'AmauiIconMaterialFloatLandscape2Filled';

export default IconMaterialFloatLandscape2Filled;
