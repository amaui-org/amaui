import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationW100'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm.35 7.175q3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762 0-3.025-1.925-4.938Q14.8 3.35 12 3.35T7.275 5.262Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563Zm0 .975q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Zm0-11.3Z"/>
    </Icon>
  );
});

IconMaterialAddLocationW100.displayName = 'AmauiIconMaterialAddLocationW100';

export default IconMaterialAddLocationW100;
