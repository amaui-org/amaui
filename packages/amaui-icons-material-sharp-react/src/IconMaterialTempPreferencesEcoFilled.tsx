import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempPreferencesEcoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesEcoFilled'

      short_name='TempPreferencesEco'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 6.75v-2.5q0-1.05.725-1.775.725-.725 1.775-.725H16v2.5q0 1.05-.725 1.775-.725.725-1.775.725Zm-5.5 6q-1.45 0-2.475-1.025Q2 10.7 2 9.25v-3.5h3.5q1.45 0 2.475 1.025Q9 7.8 9 9.25v3.5Zm4.8 8.7q-.275-.275-.275-.7 0-.425.275-.7l.825-.825q-.525-.725-.825-1.612-.3-.888-.3-1.863 0-2.5 1.75-4.262Q13.5 9.725 16 9.75h5.975v6q.05 2.5-1.712 4.25Q18.5 21.75 16 21.75q-.975 0-1.863-.3-.887-.3-1.612-.825l-.825.825q-.275.275-.7.275-.425 0-.7-.275Zm5.7-1.7q1.675 0 2.85-1.175t1.125-2.825v-4H16q-1.65-.025-2.825 1.15Q12 14.075 12 15.75q0 .575.137 1.087.138.513.413.963l2.75-2.75q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.75 2.75q.45.275.963.413.512.137 1.087.137Z"/>
    </Icon>
  );
});

IconMaterialTempPreferencesEcoFilled.displayName = 'AmauiIconMaterialTempPreferencesEcoFilled';

export default IconMaterialTempPreferencesEcoFilled;
