import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 796q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-14-94V562l28 28v112q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm266 13-76-76-176-303-47 80-20-20 41-71q9-15 26-15t26 15l226 390ZM178 856h542L377 513 178 856Zm621 79-51-51H182q-17 0-26-15t0-30l201-346-237-237q-4-4-4.5-9.5T120 236q5-5 10-5t10 5l679 679q4 4 4.5 9.5T819 935q-5 5-10 5t-10-5ZM549 685Zm-4-157Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100.displayName = 'AmauiIconMaterialWarningOffW100';

export default IconMaterialWarningOffW100;
