import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingMinistryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingMinistryFilled'

      short_name='MovingMinistry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21V3h14v18h-5v-5H6v5Zm4-8h2v-2H5Zm0-4h2V7H5Zm4 4h2v-2H9Zm0-4h2V7H9Zm10.5 6.5-1.4-1.4 1.075-1.1H16v-2h3.175L18.1 9.9l1.4-1.4L23 12Z"/>
    </Icon>
  );
});

IconMaterialMovingMinistryFilled.displayName = 'AmauiIconMaterialMovingMinistryFilled';

export default IconMaterialMovingMinistryFilled;
