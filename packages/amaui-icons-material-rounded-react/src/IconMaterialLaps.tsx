import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Laps'

      short_name='Laps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 536q0-117 81.5-198.5T360 256h240q117 0 198.5 81.5T880 536q0 103-66 181t-168 95q-18 3-32-8t-14-28q0-17 13.5-29t31.5-16q69-16 112-70.5T800 536q0-83-58.5-141.5T600 336H360q-83 0-141.5 58.5T160 536q0 83 58.5 141.5T360 736h7l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L388 908q-11 11-27.5 11T332 908q-12-12-12-28.5t12-28.5l35-35h-7q-117 0-198.5-81.5T80 536Z"/>
    </Icon>
  );
});

IconMaterialLaps.displayName = 'AmauiIconMaterialLaps';

export default IconMaterialLaps;
