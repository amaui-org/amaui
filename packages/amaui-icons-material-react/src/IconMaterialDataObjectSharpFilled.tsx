import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataObjectSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataObjectSharpFilled'
      short_name='DataObject'

      {...props}
    >
      <path d="M4 20V14H2V10H4V4H10V6H6V11.5H4V12.5H6V18H10V20ZM14 20V18H18V12.5H20V11.5H18V6H14V4H20V10H22V14H20V20Z"/>
    </Icon>
  );
});

IconMaterialDataObjectSharpFilled.displayName = 'AmauiIconMaterialDataObjectSharpFilled';

export default IconMaterialDataObjectSharpFilled;
