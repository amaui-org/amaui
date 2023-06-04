import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightW100'

      short_name='TurnSlightRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 19.35q-.15 0-.25-.1t-.1-.25v-6.5q0-.3.125-.588.125-.287.325-.487l6.075-6.075h-2.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H16.6q.325 0 .538.212.212.213.212.538v3.275q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.85L10.575 11.9q-.125.125-.175.262-.05.138-.05.288V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightW100.displayName = 'AmauiIconMaterialTurnSlightRightW100';

export default IconMaterialTurnSlightRightW100;
