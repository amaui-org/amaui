import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassFilled'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13q-.825 0-1.412-.588Q12 11.825 12 11V6q0-.825.588-1.412Q13.175 4 14 4h2q.825 0 1.413.588Q18 5.175 18 6v5q0 .825-.587 1.412Q16.825 13 16 13Zm-4.5 5q-.675 0-1.2-.387-.525-.388-.725-1.038l-2.5-8.3Q5.025 8.15 5.013 8 5 7.85 5 7.7V5q0-.425.287-.713Q5.575 4 6 4t.713.287Q7 4.575 7 5v3l2.5 8H17q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 18 17 18ZM9 21q-.425 0-.712-.288Q8 20.425 8 20t.288-.712Q8.575 19 9 19h8q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialFlightClassFilled.displayName = 'AmauiIconMaterialFlightClassFilled';

export default IconMaterialFlightClassFilled;
