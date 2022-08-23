import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnarchiveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveSharpFilled'
      short_name='Unarchive'

      {...props}
    >
      <path d="M3 21V5.8L5.3 3H18.7L21 5.8V21ZM5.4 6H18.6L17.75 5H6.25ZM11 17H13V12.8L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.8Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveSharpFilled.displayName = 'AmauiIconMaterialUnarchiveSharpFilled';

export default IconMaterialUnarchiveSharpFilled;
