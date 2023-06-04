import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProtectedSetupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupW100'

      short_name='WifiProtectedSetup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 16.275q.075-.35.113-.7.037-.35.037-.725 0-1.8-.8-3.325-.8-1.525-2.15-2.55L11.775 10.4q-.2.2-.45.1t-.25-.375V4.2q0-.175.113-.288.112-.112.287-.112h5.95q.275 0 .375.237.1.238-.1.438l-1.4 1.4q1.2 1.075 1.9 2.563.7 1.487.7 3.212 0 1.475-.512 2.762-.513 1.288-1.413 2.313-.4.45-.763.325-.362-.125-.212-.775ZM6.6 20.2q-.275 0-.387-.238-.113-.237.087-.437l1.425-1.4q-1.2-1.075-1.9-2.563-.7-1.487-.7-3.212 0-1.475.5-2.75T7 7.3q.35-.425.738-.313.387.113.262.738-.05.35-.088.7-.037.35-.037.725 0 1.8.788 3.325Q9.45 14 10.8 15.025l1.425-1.425q.2-.2.438-.1.237.1.237.375V19.8q0 .175-.112.287-.113.113-.288.113Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupW100.displayName = 'AmauiIconMaterialWifiProtectedSetupW100';

export default IconMaterialWifiProtectedSetupW100;
