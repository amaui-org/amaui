import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeter'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21.95v-2.5q-2.65-.925-4.325-3.238Q3 13.9 3 10.95q0-1.875.712-3.512.713-1.638 1.926-2.85 1.212-1.213 2.85-1.926 1.637-.712 3.487-.712t3.5.712q1.65.713 2.875 1.926 1.225 1.212 1.938 2.85Q21 9.075 21 10.95q0 2.95-1.688 5.238-1.687 2.287-4.312 3.237v2.525h-2V19.9q-.25.05-.5.05h-.525q-.25 0-.487-.012-.238-.013-.488-.038v2.05ZM12 18q2.9 0 4.95-2.05Q19 13.9 19 11q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11q0 2.9 2.05 4.95Q9.1 18 12 18ZM8 9h8V7H8Zm3.25 8 3-3L13 12.75l1.25-1.25-1.5-1.5-3 3L11 14.25 9.75 15.5Zm.75-6Z"/>
    </Icon>
  );
});

IconMaterialElectricMeter.displayName = 'AmauiIconMaterialElectricMeter';

export default IconMaterialElectricMeter;
