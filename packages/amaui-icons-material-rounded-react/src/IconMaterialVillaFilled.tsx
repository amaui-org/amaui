import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVillaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaFilled'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20V8.675q0-.325.188-.562.187-.238.462-.363l11-4.225q.5-.2.925.1.425.3.425.825V10H8q-.425 0-.713.287Q7 10.575 7 11v10Zm6 0q-.425 0-.712-.288Q9 20.425 9 20v-7q0-.425.288-.713Q9.575 12 10 12h7q0-.825.587-1.413Q18.175 10 19 10q.825 0 1.413.587Q21 11.175 21 12v8q0 .425-.288.712Q20.425 21 20 21h-4v-4q0-.425-.287-.712Q15.425 16 15 16t-.712.288Q14 16.575 14 17v4Z"/>
    </Icon>
  );
});

IconMaterialVillaFilled.displayName = 'AmauiIconMaterialVillaFilled';

export default IconMaterialVillaFilled;
