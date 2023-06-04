import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledFilled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.9 21-2.85-7.05L3 11.1V9.7l4.875-1.825L2.8 2.8l1.425-1.425 18.4 18.4L21.2 21.2l-5.075-5.075L14.3 21Zm4.775-9.025-5.65-5.65L21 3Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledFilled.displayName = 'AmauiIconMaterialNearMeDisabledFilled';

export default IconMaterialNearMeDisabledFilled;
