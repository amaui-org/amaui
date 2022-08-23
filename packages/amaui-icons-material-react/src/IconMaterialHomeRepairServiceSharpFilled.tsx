import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceSharpFilled'
      short_name='HomeRepairService'

      {...props}
    >
      <path d="M2 14V8H7V4H17V8H22V14H18V12H16V14H8V12H6V14ZM9 8H15V6H9ZM2 20V15H6V16H8V15H16V16H18V15H22V20Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceSharpFilled.displayName = 'AmauiIconMaterialHomeRepairServiceSharpFilled';

export default IconMaterialHomeRepairServiceSharpFilled;
