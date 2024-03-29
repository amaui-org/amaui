import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidFilled'

      short_name='FlipCameraAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.575 0-6.325-2.25T2.2 14h2.05q.7 2.65 2.85 4.325Q9.25 20 12 20q2.15 0 4-1.062 1.85-1.063 2.9-2.938H16v-2h6v6h-2v-2q-1.425 1.9-3.525 2.95Q14.375 22 12 22Zm0-7q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15ZM2 10V4h2v2q1.425-1.9 3.525-2.95Q9.625 2 12 2q3.575 0 6.325 2.25T21.8 10h-2.05q-.7-2.65-2.85-4.325Q14.75 4 12 4 9.85 4 8 5.062 6.15 6.125 5.1 8H8v2Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidFilled.displayName = 'AmauiIconMaterialFlipCameraAndroidFilled';

export default IconMaterialFlipCameraAndroidFilled;
