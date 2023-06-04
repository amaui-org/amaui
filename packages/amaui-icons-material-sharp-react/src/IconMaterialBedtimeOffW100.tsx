import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffW100'

      short_name='BedtimeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 5.575-.65-.65V4.8q0-.075.05-.15-.075.025-.125.05l-.1.05-.525-.525q.325-.175.775-.338.45-.162.975-.287-.15.475-.25 1.012-.1.538-.15.963ZM21.3 21.2l-3.1-3.1q-1.2 1.3-2.85 1.95-1.65.65-3.35.65-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-1.775.638-3.325.637-1.55 1.912-2.9L2.2 2.1l.5-.5 19.1 19.1ZM12 20q1.55 0 3.038-.575 1.487-.575 2.687-1.8l-11.3-11.3Q5.35 7.4 4.688 8.862 4.025 10.325 4.025 12q0 3.6 2.2 5.8Q8.425 20 12 20Zm-1.4-9.5ZM8.85 4.925Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffW100.displayName = 'AmauiIconMaterialBedtimeOffW100';

export default IconMaterialBedtimeOffW100;
