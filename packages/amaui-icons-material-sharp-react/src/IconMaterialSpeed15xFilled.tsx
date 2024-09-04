import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15xFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15xFilled'

      short_name='Speed15x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-80h80v80h-80Zm-120 0v-320H40v-80h160v400h-80Zm500 0 120-200-120-200h80l80 133 80-133h80L820-480l120 200h-80l-80-133-80 133h-80Zm-260 0v-80h140v-80H360v-240h220v80H440v80h140v240H360Z"/>
    </Icon>
  );
});

IconMaterialSpeed15xFilled.displayName = 'AmauiIconMaterialSpeed15xFilled';

export default IconMaterialSpeed15xFilled;
