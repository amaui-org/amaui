import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdbSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbSharp'
      short_name='Adb'

      {...props}
    >
      <path d="M5 11V10Q5 8.2 5.812 6.712Q6.625 5.225 8 4.275L6.125 2.4L7 1.5L9.125 3.625Q9.775 3.325 10.512 3.162Q11.25 3 12 3Q12.75 3 13.488 3.162Q14.225 3.325 14.875 3.625L17 1.5L17.875 2.4L16 4.275Q17.375 5.225 18.188 6.712Q19 8.2 19 10V11ZM15 9Q15.425 9 15.713 8.712Q16 8.425 16 8Q16 7.575 15.713 7.287Q15.425 7 15 7Q14.575 7 14.288 7.287Q14 7.575 14 8Q14 8.425 14.288 8.712Q14.575 9 15 9ZM9 9Q9.425 9 9.713 8.712Q10 8.425 10 8Q10 7.575 9.713 7.287Q9.425 7 9 7Q8.575 7 8.288 7.287Q8 7.575 8 8Q8 8.425 8.288 8.712Q8.575 9 9 9ZM12 23Q9.075 23 7.038 20.962Q5 18.925 5 16V12H19V16Q19 18.925 16.962 20.962Q14.925 23 12 23Z"/>
    </Icon>
  );
});

IconMaterialAdbSharp.displayName = 'AmauiIconMaterialAdbSharp';

export default IconMaterialAdbSharp;
