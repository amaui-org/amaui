import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledata'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7.8,7.2L9,10H7L5.87,7.33H4V10H2V2h5c1.13,0,2,0.87,2,2v1.33C9,6.13,8.47,6.87,7.8,7.2z M7,4H4v1.33h3V4z"/></g></g>
    </Icon>
  );
});

IconMaterialRMobiledata.displayName = 'AmauiIconMaterialRMobiledata';

export default IconMaterialRMobiledata;
