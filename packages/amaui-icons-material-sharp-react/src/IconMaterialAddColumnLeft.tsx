import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeft'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-200v-560H560v560h240Zm-640 80v-160h80v80h240v-560H240v80h-80v-160h720v720H160Zm320-360Zm80 0h-80 80Zm0 0ZM160-360v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeft.displayName = 'AmauiIconMaterialAddColumnLeft';

export default IconMaterialAddColumnLeft;
