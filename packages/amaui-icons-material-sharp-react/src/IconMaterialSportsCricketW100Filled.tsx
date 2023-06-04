import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketW100Filled'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 16.6 2.675 7.825l3.15-3.15 8.75 8.85Zm7.1 4.5-4.35-4.35.5-.5 4.35 4.35Zm-.1-13.05q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketW100Filled.displayName = 'AmauiIconMaterialSportsCricketW100Filled';

export default IconMaterialSportsCricketW100Filled;
