import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeft'

      short_name='TurnSlightLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20v-7.6l-5-5v2.25H6V4h5.65v2H9.4l5.6 5.6V20Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightLeft.displayName = 'AmauiIconMaterialTurnSlightLeft';

export default IconMaterialTurnSlightLeft;
