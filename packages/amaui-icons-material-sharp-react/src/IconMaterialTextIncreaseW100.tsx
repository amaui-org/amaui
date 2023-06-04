import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextIncreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncreaseW100'

      short_name='TextIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1.8 18.35 5.3-12.7h.5l5.3 12.7h-.85l-1.5-3.65h-6.5l-1.5 3.65Zm2.5-4.3h6l-2.9-7.1h-.15Zm14.2 1.3v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialTextIncreaseW100.displayName = 'AmauiIconMaterialTextIncreaseW100';

export default IconMaterialTextIncreaseW100;
