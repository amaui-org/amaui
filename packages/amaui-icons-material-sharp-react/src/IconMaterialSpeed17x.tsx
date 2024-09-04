import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed17x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed17x'

      short_name='Speed17x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-80h80v80h-80Zm-120 0v-320H40v-80h160v400h-80Zm480 0 120-200-120-200h80l80 133 80-133h80L800-480l120 200h-80l-80-133-80 133h-80Zm-200 0 80-320H320v-80h240v82l-80 318h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed17x.displayName = 'AmauiIconMaterialSpeed17x';

export default IconMaterialSpeed17x;
