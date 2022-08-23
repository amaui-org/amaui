import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCenterFocusWeakTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakTwoTone'
      short_name='CenterFocusWeak'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" opacity=".3"/><path d="M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm9 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm9-9c0-1.1-.9-2-2-2h-4v2h4v4h2V5zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakTwoTone.displayName = 'AmauiIconMaterialCenterFocusWeakTwoTone';

export default IconMaterialCenterFocusWeakTwoTone;
