import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeInactiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactiveFilled'

      short_name='AirplanemodeInactive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.725 15.625 17.5 14.65l-7-7V3.5q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062V9l7.925 4.675q.25.125.412.425.163.3.163.575 0 .55-.375.825-.375.275-.9.125ZM19.1 21.9l-5.6-5.6V19l1.625 1.225q.15.125.262.337.113.213.113.413 0 .425-.287.65-.288.225-.713.1L12 21l-2.5.725q-.425.125-.712-.112-.288-.238-.288-.663 0-.2.113-.4.112-.2.262-.325L10.5 19v-5.5l-7.225 2.125q-.525.15-.9-.125T2 14.65q0-.275.175-.563.175-.287.4-.412L7.75 10.6 2.1 4.9q-.275-.275-.288-.688Q1.8 3.8 2.1 3.5q.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveFilled.displayName = 'AmauiIconMaterialAirplanemodeInactiveFilled';

export default IconMaterialAirplanemodeInactiveFilled;
