import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed07x = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed07x'

      short_name='Speed07x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-280 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Zm-360 0v-80h80v80h-80Zm160 0 80-320H240v-80h240v82l-80 318h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed07x.displayName = 'AmauiIconMaterialSpeed07x';

export default IconMaterialSpeed07x;
