import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledata'

      short_name='3gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z"/></g></g>
    </Icon>
  );
});

IconMaterial3gMobiledata.displayName = 'AmauiIconMaterial3gMobiledata';

export default IconMaterial3gMobiledata;
