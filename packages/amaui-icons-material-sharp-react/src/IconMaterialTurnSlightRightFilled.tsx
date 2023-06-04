import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightFilled'

      short_name='TurnSlightRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20v-8.4L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightFilled.displayName = 'AmauiIconMaterialTurnSlightRightFilled';

export default IconMaterialTurnSlightRightFilled;
