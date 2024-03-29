import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHolidayVillageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageFilled'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm9 7q-.425 0-.712-.288Q16 19.425 16 19V9.375q0-.05-.15-.35L12.525 5.7q-.475-.475-.225-1.088.25-.612.925-.612.2 0 .4.087.2.088.325.213l3.75 3.75q.15.15.225.337.075.188.075.388V19q0 .425-.288.712Q17.425 20 17 20Zm4 0q-.425 0-.712-.288Q20 19.425 20 19V7.725q0-.05-.15-.35L18.175 5.7q-.475-.475-.225-1.088Q18.2 4 18.875 4q.2 0 .4.087.2.088.325.213l2.1 2.1q.15.15.225.338.075.187.075.387V19q0 .425-.288.712Q21.425 20 21 20ZM3 20q-.425 0-.712-.288Q2 19.425 2 19v-8.575q0-.2.075-.388.075-.187.225-.337l5-5q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l5 5q.15.15.225.337.075.188.075.388V19q0 .425-.287.712Q13.425 20 13 20H9v-4q0-.425-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16v4Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageFilled.displayName = 'AmauiIconMaterialHolidayVillageFilled';

export default IconMaterialHolidayVillageFilled;
