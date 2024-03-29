import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOff'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 16q0 .65-.35 1.15-.35.5-.925.725L18.85 16H20V8h-9.15l-2-2H20q.825 0 1.413.588Q22 7.175 22 8Zm-4.5-4q-.625 0-1.062-.438Q16 11.125 16 10.5t.438-1.062Q16.875 9 17.5 9t1.062.438Q19 9.875 19 10.5t-.438 1.062Q18.125 12 17.5 12Zm-8.35 0Zm5.7 0ZM7 13H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h1v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v1h1q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 13 10 13H9v1q0 .425-.287.712Q8.425 15 8 15t-.713-.288Q7 14.425 7 14Zm-3 5q-.825 0-1.412-.587Q2 16.825 2 16V8q0-.85.6-1.438.6-.587 1.45-.587h1.925L8 8H4v8h9.15L2.075 4.925q-.3-.3-.287-.713Q1.8 3.8 2.1 3.5t.712-.3q.413 0 .713.3l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L15.15 18Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOff.displayName = 'AmauiIconMaterialVideogameAssetOff';

export default IconMaterialVideogameAssetOff;
