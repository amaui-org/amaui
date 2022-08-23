import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrStrongSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrongSharp'
      short_name='HdrStrong'

      {...props}
    >
      <path d="M17 18Q14.5 18 12.75 16.25Q11 14.5 11 12Q11 9.5 12.75 7.75Q14.5 6 17 6Q19.5 6 21.25 7.75Q23 9.5 23 12Q23 14.5 21.25 16.25Q19.5 18 17 18ZM5 16Q3.35 16 2.175 14.825Q1 13.65 1 12Q1 10.35 2.175 9.175Q3.35 8 5 8Q6.65 8 7.825 9.175Q9 10.35 9 12Q9 13.65 7.825 14.825Q6.65 16 5 16ZM5 14Q5.825 14 6.412 13.412Q7 12.825 7 12Q7 11.175 6.412 10.587Q5.825 10 5 10Q4.175 10 3.587 10.587Q3 11.175 3 12Q3 12.825 3.587 13.412Q4.175 14 5 14Z"/>
    </Icon>
  );
});

IconMaterialHdrStrongSharp.displayName = 'AmauiIconMaterialHdrStrongSharp';

export default IconMaterialHdrStrongSharp;
