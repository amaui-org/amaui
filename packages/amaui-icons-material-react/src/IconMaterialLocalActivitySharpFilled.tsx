import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalActivitySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivitySharpFilled'
      short_name='LocalActivity'

      {...props}
    >
      <path d="M2 20V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V4H22V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V20ZM9.2 16 12 13.9 14.75 16 13.7 12.6 16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6Z"/>
    </Icon>
  );
});

IconMaterialLocalActivitySharpFilled.displayName = 'AmauiIconMaterialLocalActivitySharpFilled';

export default IconMaterialLocalActivitySharpFilled;
