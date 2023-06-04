import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationSearchingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingW100'

      short_name='LocationSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.15 0-.25-.1t-.1-.25v-.95q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1h-.95q-.15 0-.25-.1T3 12q0-.15.1-.25t.25-.1h.95q.275-3.125 2.25-5.1 1.975-1.975 5.1-2.25v-.95q0-.15.1-.25T12 3q.15 0 .25.1t.1.25v.95q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1h.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.95q-.275 3.125-2.25 5.1-1.975 1.975-5.1 2.25v.95q0 .15-.1.25T12 21Zm0-2q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5 9.1 5 7.05 7.05 5 9.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingW100.displayName = 'AmauiIconMaterialLocationSearchingW100';

export default IconMaterialLocationSearchingW100;
