import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackStarFilled'

      short_name='StackStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m509-220 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM240-400v80H80v-560h560v160h-80v-80H160v400h80Zm80 320v-560h560v560H320Z"/>
    </Icon>
  );
});

IconMaterialStackStarFilled.displayName = 'AmauiIconMaterialStackStarFilled';

export default IconMaterialStackStarFilled;
