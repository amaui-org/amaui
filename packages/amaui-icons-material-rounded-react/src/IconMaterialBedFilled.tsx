import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedFilled'

      short_name='Bed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.425 0-.712-.288Q2 18.425 2 18v-5q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213.5.212.925.587.425-.375.925-.587Q13.425 5 14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975Q22 12.325 22 13v5q0 .425-.288.712Q21.425 19 21 19t-.712-.288Q20 18.425 20 18v-1H4v1q0 .425-.287.712Q3.425 19 3 19Zm10-9h6V8q0-.425-.288-.713Q18.425 7 18 7h-4q-.425 0-.712.287Q13 7.575 13 8Zm-8 0h6V8q0-.425-.287-.713Q10.425 7 10 7H6q-.425 0-.713.287Q5 7.575 5 8Z"/>
    </Icon>
  );
});

IconMaterialBedFilled.displayName = 'AmauiIconMaterialBedFilled';

export default IconMaterialBedFilled;
