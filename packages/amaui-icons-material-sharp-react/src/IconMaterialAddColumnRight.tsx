import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRight'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v560h240v-560H160ZM80-120v-720h720v160h-80v-80H480v560h240v-80h80v160H80Zm400-360Zm-80 0h80-80Zm0 0Zm320 120v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRight.displayName = 'AmauiIconMaterialAddColumnRight';

export default IconMaterialAddColumnRight;
