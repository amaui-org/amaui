import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArmingCountdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArmingCountdownW100'

      short_name='ArmingCountdown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.35q1.6 0 2.725-1.125T15.85 11.5q0-1.6-1.125-2.725T12 7.65v.7q1.325 0 2.238.912.912.913.912 2.238 0 1.3-.912 2.225-.913.925-2.238.925-.775 0-1.45-.375-.675-.375-1.15-1l-.55.425q.575.75 1.388 1.2.812.45 1.762.45Zm-1.625-6.325q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-1.4 1.425q.275 0 .488-.2.212-.2.212-.5 0-.275-.2-.488-.2-.212-.5-.212t-.5.212q-.2.213-.2.488 0 .3.213.5.212.2.487.2ZM8.5 12.525q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2ZM12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55ZM12 12Zm0 7.9q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375L12 4.15 6 6.375V11.1q0 3.025 1.7 5.5t4.3 3.3Z"/>
    </Icon>
  );
});

IconMaterialArmingCountdownW100.displayName = 'AmauiIconMaterialArmingCountdownW100';

export default IconMaterialArmingCountdownW100;
