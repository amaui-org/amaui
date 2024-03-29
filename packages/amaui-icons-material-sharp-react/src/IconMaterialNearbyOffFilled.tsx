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
      <path d="M11.975 22.775 1.2 12l4-4-3.75-3.8L2.8 2.8l18.4 18.4-1.4 1.35-3.75-3.75ZM12 19.2l2.25-2.2-1.45-1.45-.8.85L7.6 12l.85-.8L7 9.75 4.8 12Zm6.8-3.2L17 14.2l2.2-2.2L12 4.8 9.8 7 8 5.2l3.975-3.975L22.8 12Zm-3.2-3.2-4.4-4.4.8-.8 4.4 4.4Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffFilled.displayName = 'AmauiIconMaterialNearbyOffFilled';

export default IconMaterialNearbyOffFilled;
