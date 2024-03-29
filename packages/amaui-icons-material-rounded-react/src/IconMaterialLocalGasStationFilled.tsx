import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalGasStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationFilled'

      short_name='LocalGasStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20V5q0-.825.588-1.413Q5.175 3 6 3h6q.825 0 1.413.587Q14 4.175 14 5v7h1q.825 0 1.413.587Q17 13.175 17 14v4.5q0 .425.288.712.287.288.712.288t.712-.288Q19 18.925 19 18.5v-7.2q-.225.125-.475.162-.25.038-.525.038-1.05 0-1.775-.725Q15.5 10.05 15.5 9q0-.8.438-1.438.437-.637 1.162-.912l-1.575-1.575Q15.3 4.85 15.3 4.55q0-.3.225-.525.225-.225.525-.225.3 0 .525.2l3.175 3.1q.375.375.562.875.188.5.188 1.025v9.5q0 1.05-.725 1.775Q19.05 21 18 21q-1.05 0-1.775-.725-.725-.725-.725-1.775v-5H14V20q0 .425-.287.712Q13.425 21 13 21Zm1-11h6V5H6Zm12 0q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationFilled.displayName = 'AmauiIconMaterialLocalGasStationFilled';

export default IconMaterialLocalGasStationFilled;
