import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialE911EmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911EmergencyW100Filled'

      short_name='E911Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 18.7V18h1.425l1.85-6.275q.125-.5.525-.787.4-.288.9-.288h2.8q.5 0 .9.288.4.287.525.787L16.675 18H18.1v.7Zm2.175-.7h7.85l-1.775-6.075q-.075-.275-.287-.425-.213-.15-.488-.15h-2.75q-.275 0-.487.15-.213.15-.288.425ZM11.65 7.85v-3.7h.7v3.7Zm5.3 2.2-.5-.5 2.625-2.6.475.475Zm1.7 4.8v-.7h3.7v.7Zm-11.6-4.8-2.6-2.625.475-.475 2.625 2.6Zm-5.4 4.8v-.7h3.7v.7Z"/>
    </Icon>
  );
});

IconMaterialE911EmergencyW100Filled.displayName = 'AmauiIconMaterialE911EmergencyW100Filled';

export default IconMaterialE911EmergencyW100Filled;
