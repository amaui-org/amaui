import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15'

      short_name='Speed15'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-320h-80v-80h160v400h-80Zm120 0v-80h80v80h-80Zm120 0v-80h160v-80H520v-240h240v80H600v80h160v240H520Z"/>
    </Icon>
  );
});

IconMaterialSpeed15.displayName = 'AmauiIconMaterialSpeed15';

export default IconMaterialSpeed15;
