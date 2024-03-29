import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowDensity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowDensity'

      short_name='LowDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 456v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 160v-80h80v80h-80ZM200 936q-33 0-56.5-23.5T120 856V576q0-17 11.5-28.5T160 536q17 0 28.5 11.5T200 576v280h560V296H480q-17 0-28.5-11.5T440 256q0-17 11.5-28.5T480 216h280q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm-80-640q0-33 23.5-56.5T200 216v80h-80Zm320 320v-80h80q0 33-23.5 56.5T440 616Z"/>
    </Icon>
  );
});

IconMaterialLowDensity.displayName = 'AmauiIconMaterialLowDensity';

export default IconMaterialLowDensity;
