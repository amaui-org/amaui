import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.9 21-2.85-7.05L3 11.1V9.7l4.875-1.825L2.8 2.8l1.425-1.425 18.4 18.4L21.2 21.2l-5.075-5.075L14.3 21Zm4.775-9.025L16.1 10.4l1.5-4-4 1.5-1.575-1.575L21 3ZM13.55 17.3l1.025-2.725-5.15-5.15L6.7 10.45l4.9 1.95Zm1.3-8.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabled.displayName = 'AmauiIconMaterialNearMeDisabled';

export default IconMaterialNearMeDisabled;
