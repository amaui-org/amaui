import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricScooter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooter'

      short_name='ElectricScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18q-1.25 0-2.125-.875T2 15q0-1.25.875-2.125T5 12q.975 0 1.738.562Q7.5 13.125 7.8 14h5.3q.275-1.7 1.412-2.975Q15.65 9.75 17.3 9.25L15.9 3H12V1h5.5l2.25 10H19q-1.65 0-2.825 1.175Q15 13.35 15 15v1H7.8q-.3.875-1.062 1.438Q5.975 18 5 18Zm0-2q.425 0 .713-.288Q6 15.425 6 15t-.287-.713Q5.425 14 5 14t-.713.287Q4 14.575 4 15t.287.712Q4.575 16 5 16Zm14 2q-1.25 0-2.125-.875T16 15q0-1.25.875-2.125T19 12q1.25 0 2.125.875T22 15q0 1.25-.875 2.125T19 18Zm0-2q.425 0 .712-.288Q20 15.425 20 15t-.288-.713Q19.425 14 19 14t-.712.287Q18 14.575 18 15t.288.712Q18.575 16 19 16Zm-6 7-6-3h4v-2l6 3h-4Zm-8-8Zm14 0Z"/>
    </Icon>
  );
});

IconMaterialElectricScooter.displayName = 'AmauiIconMaterialElectricScooter';

export default IconMaterialElectricScooter;
