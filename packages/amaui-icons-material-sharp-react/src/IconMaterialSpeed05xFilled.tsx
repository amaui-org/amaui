import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed05xFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05xFilled'

      short_name='Speed05x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h80v80h-80Zm400 0 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Zm-280 0v-80h160v-80H240v-240h240v80H320v80h160v240H240Z"/>
    </Icon>
  );
});

IconMaterialSpeed05xFilled.displayName = 'AmauiIconMaterialSpeed05xFilled';

export default IconMaterialSpeed05xFilled;
