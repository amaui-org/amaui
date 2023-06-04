import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightW100'

      short_name='RoundaboutRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.35q-.15 0-.25-.1t-.1-.25v-5.15q0-.2-.15-.362-.15-.163-.35-.213-1.875-.325-3.187-1.775Q2.65 11.05 2.65 9q0-2.225 1.563-3.788Q5.775 3.65 8 3.65q2.05 0 3.5 1.3 1.45 1.3 1.775 3.2.05.2.213.35.162.15.362.15h5.875l-2-2q-.1-.1-.1-.238 0-.137.1-.262t.237-.125q.138 0 .263.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.325 2.325q-.125.125-.263.125-.137 0-.262-.125-.1-.125-.1-.25t.125-.25l2-2H13.9q-.5 0-.875-.325T12.55 8.2Q12.275 6.55 11 5.45t-3-1.1q-1.925 0-3.287 1.362Q3.35 7.075 3.35 9q0 1.725 1.088 3.012Q5.525 13.3 7.2 13.575q.5.1.825.462.325.363.325.863V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightW100.displayName = 'AmauiIconMaterialRoundaboutRightW100';

export default IconMaterialRoundaboutRightW100;
