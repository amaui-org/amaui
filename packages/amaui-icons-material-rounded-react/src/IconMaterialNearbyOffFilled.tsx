import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffFilled'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.75 15.95-1.8-1.8 2.2-2.2-7.2-7.2-2.2 2.2-1.8-1.8L10.5 2.6q.6-.6 1.425-.6.825 0 1.425.6l8 7.95q.6.575.6 1.388 0 .812-.6 1.412Zm-5.4 5.4q-.6.575-1.412.575-.813 0-1.388-.575l-7.975-7.975Q2 12.8 2 11.975t.575-1.4l2.575-2.6-3.1-3.125q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17.025 17.025q.275.275.275.675t-.275.675q-.275.275-.687.275-.413 0-.688-.275L16 18.75Zm-8.575-9.375 7.175 7.175 2.25-2.2-1.4-1.4-.15.15q-.3.275-.7.262-.4-.012-.675-.287L8.3 12.7q-.3-.3-.288-.713.013-.412.313-.712l.1-.1L7 9.75l-2.225 2.225Zm10.775.775-4.4-4.4.1-.1q.3-.3.7-.3.4 0 .7.3l3 3q.3.3.3.7 0 .4-.3.7Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffFilled.displayName = 'AmauiIconMaterialNearbyOffFilled';

export default IconMaterialNearbyOffFilled;
