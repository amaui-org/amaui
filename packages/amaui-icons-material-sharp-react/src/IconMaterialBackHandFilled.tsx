import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandFilled'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 24q-2.8 0-4.725-1.55-1.925-1.55-2.8-3.725L2.2 10.475 5 9.35 7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16q0 3.35-2.325 5.675Q16.35 24 13 24Z"/>
    </Icon>
  );
});

IconMaterialBackHandFilled.displayName = 'AmauiIconMaterialBackHandFilled';

export default IconMaterialBackHandFilled;
