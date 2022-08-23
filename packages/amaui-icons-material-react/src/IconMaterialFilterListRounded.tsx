import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListRounded'
      short_name='FilterList'

      {...props}
    >
      <path d="M11 18Q10.575 18 10.288 17.712Q10 17.425 10 17Q10 16.575 10.288 16.288Q10.575 16 11 16H13Q13.425 16 13.713 16.288Q14 16.575 14 17Q14 17.425 13.713 17.712Q13.425 18 13 18ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H20Q20.425 6 20.712 6.287Q21 6.575 21 7Q21 7.425 20.712 7.713Q20.425 8 20 8ZM7 13Q6.575 13 6.287 12.712Q6 12.425 6 12Q6 11.575 6.287 11.287Q6.575 11 7 11H17Q17.425 11 17.712 11.287Q18 11.575 18 12Q18 12.425 17.712 12.712Q17.425 13 17 13Z"/>
    </Icon>
  );
});

IconMaterialFilterListRounded.displayName = 'AmauiIconMaterialFilterListRounded';

export default IconMaterialFilterListRounded;
