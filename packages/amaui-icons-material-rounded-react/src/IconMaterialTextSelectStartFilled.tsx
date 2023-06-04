import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStartFilled'

      short_name='TextSelectStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM200 856V296h-40q-17 0-28.5-11.5T120 256q0-17 11.5-28.5T160 216h160q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296h-40v560h40q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H160q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856h40Zm560-560v-80q33 0 56.5 23.5T840 296h-80Zm0 640v-80h80q0 33-23.5 56.5T760 936Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStartFilled.displayName = 'AmauiIconMaterialTextSelectStartFilled';

export default IconMaterialTextSelectStartFilled;
