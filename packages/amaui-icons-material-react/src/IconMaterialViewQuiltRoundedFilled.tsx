import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltRoundedFilled'
      short_name='ViewQuilt'

      {...props}
    >
      <path d="M9.825 6Q9.825 5.575 10.113 5.287Q10.4 5 10.825 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6V10.5Q21 10.925 20.712 11.212Q20.425 11.5 20 11.5H10.825Q10.4 11.5 10.113 11.212Q9.825 10.925 9.825 10.5ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V6Q3 5.575 3.288 5.287Q3.575 5 4 5H7.825Q8.25 5 8.538 5.287Q8.825 5.575 8.825 6V18Q8.825 18.425 8.538 18.712Q8.25 19 7.825 19ZM20 12.5Q20.425 12.5 20.712 12.787Q21 13.075 21 13.5V18Q21 18.425 20.712 18.712Q20.425 19 20 19H16.925Q16.5 19 16.212 18.712Q15.925 18.425 15.925 18V13.5Q15.925 13.075 16.212 12.787Q16.5 12.5 16.925 12.5ZM9.825 13.5Q9.825 13.075 10.113 12.787Q10.4 12.5 10.825 12.5H13.925Q14.35 12.5 14.638 12.787Q14.925 13.075 14.925 13.5V18Q14.925 18.425 14.638 18.712Q14.35 19 13.925 19H10.825Q10.4 19 10.113 18.712Q9.825 18.425 9.825 18Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltRoundedFilled.displayName = 'AmauiIconMaterialViewQuiltRoundedFilled';

export default IconMaterialViewQuiltRoundedFilled;
