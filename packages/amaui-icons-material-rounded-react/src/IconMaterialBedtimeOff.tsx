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
      <path d="M11.075 8.25 9.025 6.2l.1-.838q.05-.412.15-.862-.35.125-.675.275-.325.15-.65.35L6.5 3.65q.975-.65 1.938-1 .962-.35 2.012-.5.725-.1 1.05.35.325.45.05 1.25-.4 1.125-.512 2.25-.113 1.125.037 2.25Zm8 13.65L17.5 20.325q-1.2.8-2.575 1.237Q13.55 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.525.425-2.913Q2.85 7.7 3.65 6.5L2.1 4.925q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288ZM12 20q1.1 0 2.125-.288 1.025-.287 1.925-.837L5.125 7.95q-.525.9-.825 1.913Q4 10.875 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm-2.85-8.025ZM9.025 6.2Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOff.displayName = 'AmauiIconMaterialBedtimeOff';

export default IconMaterialBedtimeOff;
