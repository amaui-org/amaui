import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathroomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathroomFilled'

      short_name='Bathroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Zm5-4q.425 0 .713-.288Q10 17.425 10 17t-.287-.712Q9.425 16 9 16t-.712.288Q8 16.575 8 17t.288.712Q8.575 18 9 18Zm3 0q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm3 0q.425 0 .713-.288Q16 17.425 16 17t-.287-.712Q15.425 16 15 16t-.712.288Q14 16.575 14 17t.288.712Q14.575 18 15 18Zm-6-3q.425 0 .713-.288Q10 14.425 10 14t-.287-.713Q9.425 13 9 13t-.712.287Q8 13.575 8 14t.288.712Q8.575 15 9 15Zm3 0q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm3 0q.425 0 .713-.288Q16 14.425 16 14t-.287-.713Q15.425 13 15 13t-.712.287Q14 13.575 14 14t.288.712Q14.575 15 15 15Zm1-3q.425 0 .712-.288Q17 11.425 17 11q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11q0 .425.287.712Q7.575 12 8 12Z"/>
    </Icon>
  );
});

IconMaterialBathroomFilled.displayName = 'AmauiIconMaterialBathroomFilled';

export default IconMaterialBathroomFilled;
