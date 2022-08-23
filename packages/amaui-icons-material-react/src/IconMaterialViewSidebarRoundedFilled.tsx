import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarRoundedFilled'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M19 8Q18.575 8 18.288 7.713Q18 7.425 18 7V5Q18 4.575 18.288 4.287Q18.575 4 19 4H21Q21.425 4 21.712 4.287Q22 4.575 22 5V7Q22 7.425 21.712 7.713Q21.425 8 21 8ZM19 14Q18.575 14 18.288 13.712Q18 13.425 18 13V11Q18 10.575 18.288 10.287Q18.575 10 19 10H21Q21.425 10 21.712 10.287Q22 10.575 22 11V13Q22 13.425 21.712 13.712Q21.425 14 21 14ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V5Q2 4.575 2.288 4.287Q2.575 4 3 4H15Q15.425 4 15.713 4.287Q16 4.575 16 5V19Q16 19.425 15.713 19.712Q15.425 20 15 20ZM19 20Q18.575 20 18.288 19.712Q18 19.425 18 19V17Q18 16.575 18.288 16.288Q18.575 16 19 16H21Q21.425 16 21.712 16.288Q22 16.575 22 17V19Q22 19.425 21.712 19.712Q21.425 20 21 20Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarRoundedFilled.displayName = 'AmauiIconMaterialViewSidebarRoundedFilled';

export default IconMaterialViewSidebarRoundedFilled;
