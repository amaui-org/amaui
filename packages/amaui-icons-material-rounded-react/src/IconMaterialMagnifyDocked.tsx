import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyDocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDocked'

      short_name='MagnifyDocked'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm0-160h640V336H160v400Zm400-160v40q0 17 11.5 28.5T600 656q17 0 28.5-11.5T640 616v-40h40q17 0 28.5-11.5T720 536q0-17-11.5-28.5T680 496h-40v-40q0-17-11.5-28.5T600 416q-17 0-28.5 11.5T560 456v40h-40q-17 0-28.5 11.5T480 536q0 17 11.5 28.5T520 576h40Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDocked.displayName = 'AmauiIconMaterialMagnifyDocked';

export default IconMaterialMagnifyDocked;
