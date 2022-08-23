import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallToActionTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionTwoTone'
      short_name='CallToAction'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18V5H3v14zm2-4h14v3H5v-3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"/>
    </Icon>
  );
});

IconMaterialCallToActionTwoTone.displayName = 'AmauiIconMaterialCallToActionTwoTone';

export default IconMaterialCallToActionTwoTone;
