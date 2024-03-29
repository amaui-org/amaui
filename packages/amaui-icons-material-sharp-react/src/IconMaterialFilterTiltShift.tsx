import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterTiltShift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterTiltShift'

      short_name='FilterTiltShift'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.25 18.3q-.95-1.125-1.525-2.475T2 13h2.05q.15 1.075.55 2.062.4.988 1.05 1.838ZM2 11q.2-1.475.75-2.825T4.25 5.7l1.4 1.4Q5 7.95 4.6 8.938q-.4.987-.55 2.062Zm8.95 10.95q-1.475-.15-2.813-.712Q6.8 20.675 5.65 19.75l1.4-1.45q.875.65 1.85 1.075.975.425 2.05.575ZM7.1 5.7 5.65 4.25q1.175-.925 2.525-1.488Q9.525 2.2 11 2.05v2q-1.075.15-2.062.575Q7.95 5.05 7.1 5.7ZM12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm.95 6.95v-2q1.1-.15 2.088-.562.987-.413 1.862-1.088l1.45 1.45q-1.175.95-2.538 1.5-1.362.55-2.862.7Zm4-16.25q-.875-.65-1.875-1.075-1-.425-2.075-.575v-2q1.475.15 2.838.712 1.362.563 2.512 1.488Zm2.8 12.6-1.4-1.4q.65-.85 1.05-1.838.4-.987.55-2.062H22q-.2 1.475-.75 2.825t-1.5 2.475Zm.2-7.3q-.15-1.075-.55-2.062Q19 7.95 18.35 7.1l1.4-1.4q.95 1.125 1.525 2.475T22 11Z"/>
    </Icon>
  );
});

IconMaterialFilterTiltShift.displayName = 'AmauiIconMaterialFilterTiltShift';

export default IconMaterialFilterTiltShift;
