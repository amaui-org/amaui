import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed025Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed025Filled'

      short_name='Speed025'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-80h80v80h-80Zm400 0v-80h160v-80H560v-240h240v80H640v80h160v240H560Zm-280 0v-240h160v-80H280v-80h240v240H360v80h160v80H280Z"/>
    </Icon>
  );
});

IconMaterialSpeed025Filled.displayName = 'AmauiIconMaterialSpeed025Filled';

export default IconMaterialSpeed025Filled;
