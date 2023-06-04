import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRight'

      short_name='TurnSlightRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20v-8.4L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRight.displayName = 'AmauiIconMaterialTurnSlightRight';

export default IconMaterialTurnSlightRight;
