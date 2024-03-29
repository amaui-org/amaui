import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketFilled'

      short_name='AirplaneTicket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.85 15.65 8.9-2.35q.375-.1.562-.463.188-.362.088-.737t-.438-.563q-.337-.187-.712-.087l-2.45.65-4-3.75-1.4.35 2.4 4.2-2.4.6-1.25-.95-.95.25ZM2 20v-6q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketFilled.displayName = 'AmauiIconMaterialAirplaneTicketFilled';

export default IconMaterialAirplaneTicketFilled;
