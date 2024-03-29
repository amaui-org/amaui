import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAsset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAsset'

      short_name='VideogameAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V8q0-.825.588-1.412Q3.175 6 4 6h16q.825 0 1.413.588Q22 7.175 22 8v8q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h16V8H4v8Zm4-1q.425 0 .713-.288Q9 14.425 9 14v-1h1q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11H9v-1q0-.425-.287-.713Q8.425 9 8 9t-.713.287Q7 9.575 7 10v1H6q-.425 0-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13h1v1q0 .425.287.712Q7.575 15 8 15Zm6.5 0q.625 0 1.062-.438Q16 14.125 16 13.5t-.438-1.062Q15.125 12 14.5 12t-1.062.438Q13 12.875 13 13.5t.438 1.062Q13.875 15 14.5 15Zm3-3q.625 0 1.062-.438Q19 11.125 19 10.5t-.438-1.062Q18.125 9 17.5 9t-1.062.438Q16 9.875 16 10.5t.438 1.062Q16.875 12 17.5 12ZM4 16V8v8Z"/>
    </Icon>
  );
});

IconMaterialVideogameAsset.displayName = 'AmauiIconMaterialVideogameAsset';

export default IconMaterialVideogameAsset;
