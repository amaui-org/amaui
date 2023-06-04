import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscape'

      short_name='StayPrimaryLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 7h14v10H5z" opacity=".3"/><path d="M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscape.displayName = 'AmauiIconMaterialStayPrimaryLandscape';

export default IconMaterialStayPrimaryLandscape;
