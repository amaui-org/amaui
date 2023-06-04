import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleW100'

      short_name='Castle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 20.35q-.275 0-.487-.212-.213-.213-.213-.488V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.65h3.3V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.65q0 .275-.212.488-.213.212-.488.212h-7V18q0-1.1-.775-1.875Q13.1 15.35 12 15.35t-1.875.775Q9.35 16.9 9.35 18v2.35Zm0-.7h6.3V18q0-1.4.975-2.375.975-.975 2.375-.975t2.375.975q.975.975.975 2.375v1.65h6.3v-7.3h-4v-6H6.35v6h-4Zm7.3-8.3h.7V9.4h-.7Zm4 0h.7V9.4h-.7ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialCastleW100.displayName = 'AmauiIconMaterialCastleW100';

export default IconMaterialCastleW100;
