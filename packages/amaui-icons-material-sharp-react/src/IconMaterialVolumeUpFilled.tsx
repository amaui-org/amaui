import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpFilled'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2q0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 3.175-1.95 5.612-1.95 2.438-5.05 3.138ZM12 20l-5-5H3V9h4l5-5Zm2-4V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q15.125 15.475 14 16Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpFilled.displayName = 'AmauiIconMaterialVolumeUpFilled';

export default IconMaterialVolumeUpFilled;
