import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUp'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 3.175-1.95 5.612-1.95 2.438-5.05 3.138ZM3 15V9h4l5-5v16l-5-5Zm11 1V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q15.125 15.475 14 16Zm-4-7.15L7.85 11H5v2h2.85L10 15.15ZM7.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUp.displayName = 'AmauiIconMaterialVolumeUp';

export default IconMaterialVolumeUp;
