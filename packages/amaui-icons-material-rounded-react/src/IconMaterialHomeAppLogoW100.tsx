import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAppLogoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAppLogoW100'

      short_name='HomeAppLogo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 19.7v-3.4h6.9v3.4Zm-4.2-4.05v-3.875q0-.275.113-.525.112-.25.312-.45l6.375-5.65q.2-.175.412-.25.213-.075.438-.075t.438.075q.212.075.412.25l1.7 1.525Zm1.275 4.05q-.525 0-.9-.375t-.375-.9V16.75l3.4-3.025V19.7Zm10.625 0v-6.975l-3.675-3.25L15.15 7.2l4.075 3.6q.2.2.313.45.112.25.112.525v6.65q0 .525-.375.9t-.9.375Z"/>
    </Icon>
  );
});

IconMaterialHomeAppLogoW100.displayName = 'AmauiIconMaterialHomeAppLogoW100';

export default IconMaterialHomeAppLogoW100;
