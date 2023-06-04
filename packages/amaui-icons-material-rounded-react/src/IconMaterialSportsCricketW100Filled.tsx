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
      <path d="M14.1 14 12 16.1q-.225.225-.5.225T11 16.1L3.15 8.3q-.225-.225-.225-.475 0-.25.225-.475l2.2-2.2q.225-.225.475-.225.25 0 .475.225l7.8 7.9q.225.225.225.475 0 .25-.225.475Zm4.25 6.85-4.1-4.1.5-.5 4.125 4.125q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm.15-12.8q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketW100Filled.displayName = 'AmauiIconMaterialSportsCricketW100Filled';

export default IconMaterialSportsCricketW100Filled;
