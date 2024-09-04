import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed175Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed175Filled'

      short_name='Speed175'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-80h80v80h-80Zm360 0v-80h160v-80H640v-240h240v80H720v80h160v240H640Zm-480 0v-320H80v-80h160v400h-80Zm280 0 80-320H360v-80h242v74l-82 326h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed175Filled.displayName = 'AmauiIconMaterialSpeed175Filled';

export default IconMaterialSpeed175Filled;
