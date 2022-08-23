import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4gMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataTwoTone'
      short_name='4gMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M9,7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7z M17,11v2h2v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5 c1.1,0,2-0.9,2-2v-4H17z"/></g></g>
    </Icon>
  );
});

IconMaterial4gMobiledataTwoTone.displayName = 'AmauiIconMaterial4gMobiledataTwoTone';

export default IconMaterial4gMobiledataTwoTone;
