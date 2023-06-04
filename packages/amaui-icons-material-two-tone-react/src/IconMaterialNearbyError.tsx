import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyError'

      short_name='NearbyError'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,7.57l4.42,4.42L12,16.41l-4.42-4.42L12,7.57z M12,19.19l-7.2-7.2l7.2-7.2l6,6V7.16l-4.58-4.58 c-0.78-0.78-2.05-0.78-2.83,0l-8.01,8c-0.78,0.78-0.78,2.05,0,2.83l8.01,8c0.78,0.78,2.05,0.78,2.83,0L18,16.82v-3.63L12,19.19z M20,20h2v2h-2V20z M22,10h-2v8h2V10"/></g></g>
    </Icon>
  );
});

IconMaterialNearbyError.displayName = 'AmauiIconMaterialNearbyError';

export default IconMaterialNearbyError;
