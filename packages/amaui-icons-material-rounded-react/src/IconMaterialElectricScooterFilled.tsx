import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricScooterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterFilled'

      short_name='ElectricScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18q-1.25 0-2.125-.875T2 15q0-1.25.875-2.125T5 12q.975 0 1.738.562Q7.5 13.125 7.8 14h5.3q.275-1.7 1.412-2.975Q15.65 9.75 17.3 9.25L15.9 3H13q-.425 0-.712-.288Q12 2.425 12 2t.288-.713Q12.575 1 13 1h2.9q.675 0 1.237.438.563.437.713 1.112l1.9 8.45H19q-1.65 0-2.825 1.175Q15 13.35 15 15v1H7.8q-.3.875-1.062 1.438Q5.975 18 5 18Zm14 0q-1.25 0-2.125-.875T16 15q0-1.25.875-2.125T19 12q1.25 0 2.125.875T22 15q0 1.25-.875 2.125T19 18Zm-6 5-6-3h4v-2l6 3h-4Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterFilled.displayName = 'AmauiIconMaterialElectricScooterFilled';

export default IconMaterialElectricScooterFilled;
