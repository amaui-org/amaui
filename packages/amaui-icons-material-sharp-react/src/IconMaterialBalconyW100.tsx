import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBalconyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconyW100'

      short_name='Balcony'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 11.7v-1.4h1.4v1.4Zm6 0v-1.4h1.4v1.4Zm-10 9v-6.15h1V10q0-1.4.525-2.612.525-1.213 1.438-2.126.912-.912 2.137-1.437T12 3.3q1.4 0 2.613.525 1.212.525 2.125 1.437.912.913 1.437 2.126Q18.7 8.6 18.7 10v4.55h1v6.15ZM5 20h2.65v-4.75H5Zm3.35 0h3.3v-4.75h-3.3ZM6 14.55h5.65V4.025q-2.125.05-3.887 1.712Q6 7.4 6 10Zm6.35 0H18V10q0-2.6-1.762-4.263-1.763-1.662-3.888-1.712Zm0 5.45h3.3v-4.75h-3.3Zm4 0H19v-4.75h-2.65Z"/>
    </Icon>
  );
});

IconMaterialBalconyW100.displayName = 'AmauiIconMaterialBalconyW100';

export default IconMaterialBalconyW100;
