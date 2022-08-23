import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnRoundedFilled'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V6Q3 5.575 3.288 5.287Q3.575 5 4 5H7.325Q7.75 5 8.038 5.287Q8.325 5.575 8.325 6V18Q8.325 18.425 8.038 18.712Q7.75 19 7.325 19ZM10.325 19Q9.9 19 9.613 18.712Q9.325 18.425 9.325 18V6Q9.325 5.575 9.613 5.287Q9.9 5 10.325 5H13.65Q14.075 5 14.363 5.287Q14.65 5.575 14.65 6V18Q14.65 18.425 14.363 18.712Q14.075 19 13.65 19ZM16.65 19Q16.225 19 15.938 18.712Q15.65 18.425 15.65 18V6Q15.65 5.575 15.938 5.287Q16.225 5 16.65 5H19.975Q20.4 5 20.688 5.287Q20.975 5.575 20.975 6V18Q20.975 18.425 20.688 18.712Q20.4 19 19.975 19Z"/>
    </Icon>
  );
});

IconMaterialViewColumnRoundedFilled.displayName = 'AmauiIconMaterialViewColumnRoundedFilled';

export default IconMaterialViewColumnRoundedFilled;
