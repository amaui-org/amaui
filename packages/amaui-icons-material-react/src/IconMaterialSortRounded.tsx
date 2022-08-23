import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortRounded'
      short_name='Sort'

      {...props}
    >
      <path d="M8 18H4Q3.575 18 3.288 17.712Q3 17.425 3 17Q3 16.575 3.288 16.288Q3.575 16 4 16H8Q8.425 16 8.713 16.288Q9 16.575 9 17Q9 17.425 8.713 17.712Q8.425 18 8 18ZM20 8H4Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H20Q20.425 6 20.712 6.287Q21 6.575 21 7Q21 7.425 20.712 7.713Q20.425 8 20 8ZM14 13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H14Q14.425 11 14.713 11.287Q15 11.575 15 12Q15 12.425 14.713 12.712Q14.425 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialSortRounded.displayName = 'AmauiIconMaterialSortRounded';

export default IconMaterialSortRounded;
