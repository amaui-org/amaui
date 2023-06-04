import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenW100'

      short_name='Fullscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19v-5h.7v4.3H10v.7Zm0-9V5h5v.7H5.7V10Zm9 9v-.7h4.3V14h.7v5Zm4.3-9V5.7H14V5h5v5Z"/>
    </Icon>
  );
});

IconMaterialFullscreenW100.displayName = 'AmauiIconMaterialFullscreenW100';

export default IconMaterialFullscreenW100;
