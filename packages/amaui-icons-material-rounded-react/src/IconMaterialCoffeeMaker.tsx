import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeMaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeMaker'

      short_name='CoffeeMaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h13q.425 0 .712.287Q20 2.575 20 3t-.288.712Q19.425 4 19 4h-1v2q0 .425-.288.713Q17.425 7 17 7H9q-.425 0-.712-.287Q8 6.425 8 6V4H6v16h4.05q-.95-.675-1.5-1.712Q8 17.25 8 16v-3q0-.825.588-1.413Q9.175 11 10 11h6q.825 0 1.413.587Q18 12.175 18 13v3q0 1.25-.55 2.288-.55 1.037-1.5 1.712H19q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22Zm7-3q1.25 0 2.125-.875T16 16v-3h-6v3q0 1.25.875 2.125T13 19Zm0-9q.425 0 .713-.288Q14 9.425 14 9t-.287-.713Q13.425 8 13 8t-.712.287Q12 8.575 12 9t.288.712Q12.575 10 13 10Zm0 3Z"/>
    </Icon>
  );
});

IconMaterialCoffeeMaker.displayName = 'AmauiIconMaterialCoffeeMaker';

export default IconMaterialCoffeeMaker;
