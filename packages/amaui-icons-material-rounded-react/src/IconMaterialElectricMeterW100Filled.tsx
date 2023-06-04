import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterW100Filled'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 18.65q-.425 0-.825-.038-.4-.037-.8-.137v1.475q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V18.3q-2.35-.75-3.85-2.75t-1.5-4.6q0-1.6.6-3T6.55 5.5Q7.6 4.45 9 3.85q1.4-.6 2.975-.6 1.6 0 3 .6t2.45 1.65q1.05 1.05 1.663 2.45.612 1.4.612 3 0 2.575-1.5 4.575t-3.85 2.75v1.675q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.475q-.425.1-.838.137-.412.038-.837.038ZM15 8.35q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-3.05 4.525 1.1-1.075q.05-.05.075-.138.025-.087.025-.162 0-.075-.025-.163-.025-.087-.1-.137-.125-.125-.287-.125-.163 0-.288.125l-1.125 1.15q-.225.225-.225.525 0 .3.225.525l.725.725-1.1 1.075q-.05.05-.075.137-.025.088-.025.163 0 .075.025.162.025.088.075.138.125.125.3.125t.3-.125l1.125-1.15q.225-.225.225-.525 0-.3-.225-.525Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterW100Filled.displayName = 'AmauiIconMaterialElectricMeterW100Filled';

export default IconMaterialElectricMeterW100Filled;
