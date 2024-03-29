import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOff'

      short_name='BedtimeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.075 8.25 9.025 6.2l.1-.838q.05-.412.15-.862-.35.125-.675.275-.325.15-.65.35L6.5 3.65q1.2-.8 2.575-1.225Q10.45 2 12 2q.1 0 .175.012.075.013.175.013-.875 1.5-1.175 3.087-.3 1.588-.1 3.138Zm8.7 14.35L17.5 20.325q-1.2.8-2.575 1.237Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.525.425-2.913Q2.85 7.7 3.65 6.5L1.4 4.225 2.8 2.8l18.4 18.4ZM12 20q1.1 0 2.125-.288 1.025-.287 1.925-.837L5.125 7.95q-.525.9-.825 1.913Q4 10.875 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm-2.85-8.025ZM9.025 6.2Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOff.displayName = 'AmauiIconMaterialBedtimeOff';

export default IconMaterialBedtimeOff;
