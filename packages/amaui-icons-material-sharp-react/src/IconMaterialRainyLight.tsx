import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainyLight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyLight'

      short_name='RainyLight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-465 26-738l72-36 136 272-72 37Zm140 280L187-418l70-36 116 232-71 37Zm82-200L208-738l71-36 176 352-71 37Zm87-201-76-152 71-35 76 151-71 36Zm24 400-76-152 71-35 75 150-70 37Zm186 0L505-538l71-36 176 351-71 37Zm61-239L587-738l71-35 156 311-72 37Zm120 240-95-193 71-35 96 191-72 37Z"/>
    </Icon>
  );
});

IconMaterialRainyLight.displayName = 'AmauiIconMaterialRainyLight';

export default IconMaterialRainyLight;
