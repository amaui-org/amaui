import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterFilled'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21.95v-2.5q-2.65-.925-4.325-3.238Q3 13.9 3 10.95q0-1.875.712-3.512.713-1.638 1.926-2.85 1.212-1.213 2.85-1.926 1.637-.712 3.487-.712t3.5.712q1.65.713 2.875 1.926 1.225 1.212 1.938 2.85Q21 9.075 21 10.95q0 2.95-1.688 5.238-1.687 2.287-4.312 3.237v2.525h-2V19.9q-.25.05-.5.05h-.525q-.25 0-.487-.012-.238-.013-.488-.038v2.05ZM8 9h8V7H8Zm3.25 8 3-3L13 12.75l1.25-1.25-1.5-1.5-3 3L11 14.25 9.75 15.5Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterFilled.displayName = 'AmauiIconMaterialElectricMeterFilled';

export default IconMaterialElectricMeterFilled;
