import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectEnd'

      short_name='TextSelectEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120 456v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm520 160q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856h40V296h-40q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h160q17 0 28.5 11.5T840 256q0 17-11.5 28.5T800 296h-40v560h40q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H640Zm-440 0q-33 0-56.5-23.5T120 856h80v80Zm-80-640q0-33 23.5-56.5T200 216v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectEnd.displayName = 'AmauiIconMaterialTextSelectEnd';

export default IconMaterialTextSelectEnd;
