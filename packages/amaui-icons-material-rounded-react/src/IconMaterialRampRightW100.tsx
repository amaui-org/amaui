import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRightW100'

      short_name='RampRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.35q-.15 0-.25-.1t-.1-.25v-7.675Q11 13.8 9.75 15.188 8.5 16.575 6.775 17.75q-.1.05-.225.038-.125-.013-.2-.088-.125-.125-.1-.275.025-.15.175-.275 1.65-1.125 3.438-3.175Q11.65 11.925 11.65 9V5.275l-1.975 2q-.125.125-.262.125-.138 0-.263-.125t-.125-.25q0-.125.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .288.05.137.05.262.175l2.3 2.325q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRampRightW100.displayName = 'AmauiIconMaterialRampRightW100';

export default IconMaterialRampRightW100;
