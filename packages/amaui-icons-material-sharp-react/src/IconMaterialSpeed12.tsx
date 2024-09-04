import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12'

      short_name='Speed12'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-320h-80v-80h160v400h-80Zm120 0v-80h80v80h-80Zm120 0v-240h160v-80H520v-80h240v240H600v80h160v80H520Z"/>
    </Icon>
  );
});

IconMaterialSpeed12.displayName = 'AmauiIconMaterialSpeed12';

export default IconMaterialSpeed12;
