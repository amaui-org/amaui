import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDvrFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrFilled'

      short_name='Dvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 10h7q.425 0 .712-.288Q18 9.425 18 9t-.288-.713Q17.425 8 17 8h-7q-.425 0-.712.287Q9 8.575 9 9t.288.712Q9.575 10 10 10Zm0 4h7q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12h-7q-.425 0-.712.287Q9 12.575 9 13t.288.712Q9.575 14 10 14Zm-3-4q.425 0 .713-.288Q8 9.425 8 9t-.287-.713Q7.425 8 7 8t-.713.287Q6 8.575 6 9t.287.712Q6.575 10 7 10Zm0 4q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm2 7q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialDvrFilled.displayName = 'AmauiIconMaterialDvrFilled';

export default IconMaterialDvrFilled;
