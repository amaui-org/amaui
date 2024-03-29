import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPowerFilled'

      short_name='WindPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23q0-.825.588-1.413Q11.175 21 12 21v-5.725q.225.1.475.15.25.05.525.05 1.05 0 1.763-.713.712-.712.712-1.762v-.225l4.025.975 3.55 6.35-2.825 2.825-6.225-6.2V21q.825 0 1.413.587Q16 22.175 16 23Zm-7-2v-2h5v2Zm8.375-6.125L8.05 17 1 15v-4h10.525q-.475.35-.737.863-.263.512-.263 1.137 0 .575.225 1.05.225.475.625.825ZM13 14.5q-.625 0-1.062-.438Q11.5 13.625 11.5 13t.438-1.062Q12.375 11.5 13 11.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438Zm2.3-2.45q-.275-.675-.887-1.1-.613-.425-1.413-.425-.275 0-.525.05t-.475.15V5.9L17.35.925l3.375 2.1ZM1 9V7h5v2Zm3-4V3h6v2Z"/>
    </Icon>
  );
});

IconMaterialWindPowerFilled.displayName = 'AmauiIconMaterialWindPowerFilled';

export default IconMaterialWindPowerFilled;
