import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed2xFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed2xFilled'

      short_name='Speed2x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-240h160v-80H200v-80h240v240H280v80h160v80H200Zm280 0 120-200-120-200h80l80 133 80-133h80L680-480l120 200h-80l-80-133-80 133h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed2xFilled.displayName = 'AmauiIconMaterialSpeed2xFilled';

export default IconMaterialSpeed2xFilled;
