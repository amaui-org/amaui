import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscape2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscape2'

      short_name='FloatLandscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400h200v-240H520v240ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape2.displayName = 'AmauiIconMaterialFloatLandscape2';

export default IconMaterialFloatLandscape2;
