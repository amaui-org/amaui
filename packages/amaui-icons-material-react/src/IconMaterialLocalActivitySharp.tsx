import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalActivitySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivitySharp'
      short_name='LocalActivity'

      {...props}
    >
      <path d="M2 20V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V4H22V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V20ZM4 18H20V15.45Q19.05 14.925 18.525 13.987Q18 13.05 18 12Q18 10.95 18.525 10.012Q19.05 9.075 20 8.55V6H4V8.55Q4.95 9.075 5.475 10.012Q6 10.95 6 12Q6 13.05 5.475 13.987Q4.95 14.925 4 15.45ZM9.2 16 12 13.9 14.75 16 13.7 12.6 16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialLocalActivitySharp.displayName = 'AmauiIconMaterialLocalActivitySharp';

export default IconMaterialLocalActivitySharp;
