import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed02x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed02x'

      short_name='Speed02x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h80v80h-80Zm120 0v-240h160v-80H240v-80h240v240H320v80h160v80H240Zm280 0 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed02x.displayName = 'AmauiIconMaterialSpeed02x';

export default IconMaterialSpeed02x;
