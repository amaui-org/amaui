import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscape2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscape2W100'

      short_name='FloatLandscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-380h200v-240H500v240ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape2W100.displayName = 'AmauiIconMaterialFloatLandscape2W100';

export default IconMaterialFloatLandscape2W100;
