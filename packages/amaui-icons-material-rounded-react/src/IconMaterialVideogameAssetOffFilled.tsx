import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOffFilled'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V8q0-.85.6-1.438.6-.587 1.45-.587h1.925L15 15h-2.85L2.075 4.925q-.3-.3-.287-.713Q1.8 3.8 2.1 3.5t.712-.3q.413 0 .713.3l16.975 17q.3.3.288.712-.013.413-.313.713t-.7.3q-.4 0-.7-.3L15.15 18ZM8.85 6H20q.825 0 1.413.588Q22 7.175 22 8v8q0 .65-.35 1.15-.35.5-.925.725Zm8.65 3q-.625 0-1.062.438Q16 9.875 16 10.5t.438 1.062Q16.875 12 17.5 12t1.062-.438Q19 11.125 19 10.5t-.438-1.062Q18.125 9 17.5 9ZM7 13v1q0 .425.287.712Q7.575 15 8 15t.713-.288Q9 14.425 9 14v-1h1q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11H9v-1q0-.425-.287-.713Q8.425 9 8 9t-.713.287Q7 9.575 7 10v1H6q-.425 0-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOffFilled.displayName = 'AmauiIconMaterialVideogameAssetOffFilled';

export default IconMaterialVideogameAssetOffFilled;
