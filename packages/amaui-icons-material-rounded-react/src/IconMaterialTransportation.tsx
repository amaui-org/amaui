import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transportation'

      short_name='Transportation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 16q-1.8 0-3.175-1.125Q14.45 13.75 14.1 12h-2.975l-1.2-2H14.1q.125-.55.338-1.05.212-.5.562-.95H8.7L7.5 6h8.55l-1.1-3H11V1h3.95q.65 0 1.15.362.5.363.725.963L18.175 6H19q2.075 0 3.538 1.462Q24 8.925 24 11q0 2.075-1.462 3.537Q21.075 16 19 16Zm0-2q1.25 0 2.125-.875T22 11q0-1.25-.875-2.125T19 8h-.075l.975 2.675-1.9.675-.95-2.625q-.5.425-.775 1.025Q16 10.35 16 11q0 1.25.875 2.125T19 14ZM7 23q-1.25 0-2.125-.875T4 20H0v-2h4.775q.375-.375.95-.688Q6.3 17 7 17q.625 0 1.2.25t1.025.75H12v-2H0v-2h2v-3H0V9h7l3 5h2q.825 0 1.413.587Q14 15.175 14 16v2q0 .825-.587 1.413Q12.825 20 12 20h-2q0 1.25-.875 2.125T7 23Zm-3-9h3.675l-1.8-3H4Zm3 7q.425 0 .713-.288Q8 20.425 8 20t-.287-.712Q7.425 19 7 19t-.713.288Q6 19.575 6 20t.287.712Q6.575 21 7 21Zm-1-4Z"/>
    </Icon>
  );
});

IconMaterialTransportation.displayName = 'AmauiIconMaterialTransportation';

export default IconMaterialTransportation;
