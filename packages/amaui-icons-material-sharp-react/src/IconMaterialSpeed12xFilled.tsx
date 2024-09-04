import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12xFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12xFilled'

      short_name='Speed12x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-80h80v80h-80Zm120 0v-240h140v-80H360v-80h220v240H440v80h140v80H360Zm-240 0v-320H40v-80h160v400h-80Zm500 0 120-200-120-200h80l80 133 80-133h80L820-480l120 200h-80l-80-133-80 133h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed12xFilled.displayName = 'AmauiIconMaterialSpeed12xFilled';

export default IconMaterialSpeed12xFilled;
