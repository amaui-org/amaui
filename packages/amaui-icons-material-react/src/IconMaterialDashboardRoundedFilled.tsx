import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardRoundedFilled'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13 8V4Q13 3.575 13.288 3.287Q13.575 3 14 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V8Q21 8.425 20.712 8.712Q20.425 9 20 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8ZM3 12V4Q3 3.575 3.288 3.287Q3.575 3 4 3H10Q10.425 3 10.713 3.287Q11 3.575 11 4V12Q11 12.425 10.713 12.712Q10.425 13 10 13H4Q3.575 13 3.288 12.712Q3 12.425 3 12ZM13 20V12Q13 11.575 13.288 11.287Q13.575 11 14 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12V20Q21 20.425 20.712 20.712Q20.425 21 20 21H14Q13.575 21 13.288 20.712Q13 20.425 13 20ZM3 20V16Q3 15.575 3.288 15.287Q3.575 15 4 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16V20Q11 20.425 10.713 20.712Q10.425 21 10 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20Z"/>
    </Icon>
  );
});

IconMaterialDashboardRoundedFilled.displayName = 'AmauiIconMaterialDashboardRoundedFilled';

export default IconMaterialDashboardRoundedFilled;
