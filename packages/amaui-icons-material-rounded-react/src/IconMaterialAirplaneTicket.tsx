import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplaneTicket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicket'

      short_name='AirplaneTicket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.225 15.55 8.525-2.25q.375-.1.562-.463.188-.362.088-.737t-.438-.563q-.337-.187-.712-.087l-2.45.65-3.725-3.475q-.125-.125-.312-.175-.188-.05-.363 0-.425.125-.55.45-.125.325.075.7l1.875 3.3-2.4.6-1.075-.825q-.075-.05-.188-.075-.112-.025-.212 0-.3.075-.4.325-.1.25.05.525l1.075 1.875q.1.15.25.212.15.063.325.013ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicket.displayName = 'AmauiIconMaterialAirplaneTicket';

export default IconMaterialAirplaneTicket;
