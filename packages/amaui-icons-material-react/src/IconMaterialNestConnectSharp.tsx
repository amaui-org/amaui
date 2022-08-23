import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestConnectSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnectSharp'
      short_name='NestConnect'

      {...props}
    >
      <path d="M12 19Q9.925 19 8.463 17.538Q7 16.075 7 14V10Q7 7.925 8.463 6.463Q9.925 5 12 5Q14.075 5 15.538 6.463Q17 7.925 17 10V14Q17 16.075 15.538 17.538Q14.075 19 12 19ZM12 17Q13.25 17 14.125 16.125Q15 15.25 15 14V10Q15 8.75 14.125 7.875Q13.25 7 12 7Q10.75 7 9.875 7.875Q9 8.75 9 10V14Q9 15.25 9.875 16.125Q10.75 17 12 17ZM5 23Q4.175 23 3.587 22.413Q3 21.825 3 21V3Q3 2.175 3.587 1.587Q4.175 1 5 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V21Q21 21.825 20.413 22.413Q19.825 23 19 23ZM5 21H19Q19 21 19 21Q19 21 19 21V3Q19 3 19 3Q19 3 19 3H5Q5 3 5 3Q5 3 5 3V21Q5 21 5 21Q5 21 5 21ZM12 10Q11.575 10 11.288 9.712Q11 9.425 11 9Q11 8.575 11.288 8.287Q11.575 8 12 8Q12.425 8 12.713 8.287Q13 8.575 13 9Q13 9.425 12.713 9.712Q12.425 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialNestConnectSharp.displayName = 'AmauiIconMaterialNestConnectSharp';

export default IconMaterialNestConnectSharp;
