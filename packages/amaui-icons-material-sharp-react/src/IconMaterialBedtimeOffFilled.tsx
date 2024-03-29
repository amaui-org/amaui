import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffFilled'

      short_name='BedtimeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.075 8.25 6.5 3.65q1.2-.8 2.575-1.225Q10.45 2 12 2q.1 0 .175.012.075.013.175.013-.875 1.5-1.175 3.087-.3 1.588-.1 3.138Zm8.7 14.35L17.5 20.325q-1.2.8-2.575 1.237Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.525.425-2.913Q2.85 7.7 3.65 6.5L1.4 4.225 2.8 2.8l18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffFilled.displayName = 'AmauiIconMaterialBedtimeOffFilled';

export default IconMaterialBedtimeOffFilled;
