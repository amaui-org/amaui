import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketW100Filled'

      short_name='AirplaneTicket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.25 15.275 8.35-2.225q.325-.075.525-.338.2-.262.125-.562-.075-.3-.362-.412-.288-.113-.588-.038l-2.55.7-3.825-3.575q-.075-.075-.187-.113-.113-.037-.238-.012-.275.05-.387.275-.113.225.037.5l2.05 3.575-2.85.7-1.15-.875q-.05-.05-.112-.05-.063 0-.113.025-.15.05-.2.187-.05.138.025.263l1 1.775q.075.125.2.187.125.063.25.013ZM4 18.7q-.275 0-.487-.213Q3.3 18.275 3.3 18v-2.95q.9-.425 1.45-1.238Q5.3 13 5.3 12t-.55-1.812Q4.2 9.375 3.3 8.95V6q0-.275.213-.488Q3.725 5.3 4 5.3h16q.275 0 .488.212.212.213.212.488v12q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketW100Filled.displayName = 'AmauiIconMaterialAirplaneTicketW100Filled';

export default IconMaterialAirplaneTicketW100Filled;
