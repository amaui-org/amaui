import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerFilled'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 21v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3Z"/>
    </Icon>
  );
});

IconMaterialPowerFilled.displayName = 'AmauiIconMaterialPowerFilled';

export default IconMaterialPowerFilled;
