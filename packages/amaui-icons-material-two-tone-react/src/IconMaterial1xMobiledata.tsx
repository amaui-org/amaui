import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledata'

      short_name='1xMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M4,7h4v10H6V9H4V7z M15.83,11.72L18.66,7h-2.33l-1.66,2.77L13,7h-2.33l2.83,4.72L10.33,17h2.33l2-3.34l2,3.34H19 L15.83,11.72z"/></g></g>
    </Icon>
  );
});

IconMaterial1xMobiledata.displayName = 'AmauiIconMaterial1xMobiledata';

export default IconMaterial1xMobiledata;
