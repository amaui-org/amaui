import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlidersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlidersW100'

      short_name='Sliders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-412v-136h696v136H132Zm428-28h240v-80H560v80Z"/>
    </Icon>
  );
});

IconMaterialSlidersW100.displayName = 'AmauiIconMaterialSlidersW100';

export default IconMaterialSlidersW100;
