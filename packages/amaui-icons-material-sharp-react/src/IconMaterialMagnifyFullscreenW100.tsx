import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreenW100'

      short_name='MagnifyFullscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm28-28h640V336H160v480Zm0 0V336v480Zm426-176h28v-90h90v-28h-90v-90h-28v90h-90v28h90v90Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreenW100.displayName = 'AmauiIconMaterialMagnifyFullscreenW100';

export default IconMaterialMagnifyFullscreenW100;
