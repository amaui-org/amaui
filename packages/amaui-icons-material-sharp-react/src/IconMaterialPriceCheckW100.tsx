import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckW100'

      short_name='PriceCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 14.35v-1h-2.5v-.7h5v-3.3h-5v-4.7h2.5v-1h.7v1h2.5v.7h-5v3.3h5v4.7h-2.5v1Zm6.8 5.75-3.35-3.35.5-.5 2.85 2.85 5.7-5.7.5.5Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckW100.displayName = 'AmauiIconMaterialPriceCheckW100';

export default IconMaterialPriceCheckW100;
