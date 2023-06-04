import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLapsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LapsFilled'

      short_name='Laps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m360 936-57-56 64-64h-7q-117 0-198.5-81.5T80 536q0-117 81.5-198.5T360 256h240q117 0 198.5 81.5T880 536q0 117-81.5 198.5T600 816v-80q83 0 141.5-58.5T800 536q0-83-58.5-141.5T600 336H360q-83 0-141.5 58.5T160 536q0 83 58.5 141.5T360 736l16 8-72-72 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialLapsFilled.displayName = 'AmauiIconMaterialLapsFilled';

export default IconMaterialLapsFilled;
