import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHand'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 24q-2.575 0-4.7-1.438-2.125-1.437-3.075-3.837l-3.3-8.375 4.3-1.75L7 10.4V2h3V0h5v1.5h3v3h3V16q0 3.35-2.325 5.675Q16.35 24 13 24Zm0-2q2.5 0 4.25-1.75T19 16V6.5h-1V12h-2V3.5h-1V12h-2V2h-1v10h-2V4H9v11H7l-1.525-3.9-.975.35L7.1 18q.725 1.8 2.338 2.9Q11.05 22 13 22Z"/>
    </Icon>
  );
});

IconMaterialBackHand.displayName = 'AmauiIconMaterialBackHand';

export default IconMaterialBackHand;
