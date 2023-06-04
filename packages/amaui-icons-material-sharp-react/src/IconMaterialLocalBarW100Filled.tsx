import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarW100Filled'

      short_name='LocalBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 20.35v-.7h4.35v-6.9L4.75 5v-.7h14.5V5l-6.9 7.75v6.9h4.35v.7ZM7.45 7h9.1l1.8-2H5.65Z"/>
    </Icon>
  );
});

IconMaterialLocalBarW100Filled.displayName = 'AmauiIconMaterialLocalBarW100Filled';

export default IconMaterialLocalBarW100Filled;
