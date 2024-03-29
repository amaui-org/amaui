import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOff'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.8 16 17 14.2l2.2-2.2L12 4.8 9.8 7 8 5.2l2.55-2.55q.6-.6 1.438-.613.837-.012 1.437.588L21.4 10.6q.6.575.6 1.387 0 .813-.6 1.413Zm-5.4 5.4q-.6.575-1.412.575-.813 0-1.388-.575l-7.975-7.975q-.575-.575-.575-1.4t.575-1.4l2.575-2.6L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17.025 17.025q.275.275.275.675t-.275.675q-.275.275-.688.275-.412 0-.687-.275l-3.1-3.075Zm-8.575-9.375L12 19.2l2.25-2.2-1.4-1.4-.15.15q-.3.275-.7.262-.4-.012-.675-.287L8.35 12.75q-.3-.3-.288-.713.013-.412.313-.712l.1-.1L7.05 9.8l-2.225 2.225ZM15.6 12.8l-4.4-4.4.1-.1q.3-.3.7-.3.4 0 .7.3l3 3q.3.3.3.7 0 .4-.3.7Z"/>
    </Icon>
  );
});

IconMaterialNearbyOff.displayName = 'AmauiIconMaterialNearbyOff';

export default IconMaterialNearbyOff;
