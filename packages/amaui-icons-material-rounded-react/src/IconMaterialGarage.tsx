import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Garage'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm0-2h16V4H4v16Zm5-6q.425 0 .713-.288Q10 13.425 10 13t-.287-.713Q9.425 12 9 12t-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14Zm6 0q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12t-.712.287Q14 12.575 14 13t.288.712Q14.575 14 15 14ZM5 11.1v6.6q0 .35.225.575.225.225.575.225h.4q.35 0 .575-.225Q7 18.05 7 17.7v-1.2h10v1.2q0 .35.225.575.225.225.575.225h.4q.35 0 .575-.225Q19 18.05 19 17.7v-6.6l-1.65-4.8q-.125-.35-.412-.575Q16.65 5.5 16.3 5.5H7.7q-.35 0-.638.225-.287.225-.412.575Zm2.65-1.6.7-2h7.3l.7 2ZM4 4v16V4Zm3 10.5v-3h10v3Z"/>
    </Icon>
  );
});

IconMaterialGarage.displayName = 'AmauiIconMaterialGarage';

export default IconMaterialGarage;
