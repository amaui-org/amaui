import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderRoundedFilled'
      short_name='Reorder'

      {...props}
    >
      <path d="M4 15Q3.575 15 3.288 14.712Q3 14.425 3 14Q3 13.575 3.288 13.287Q3.575 13 4 13H20Q20.425 13 20.712 13.287Q21 13.575 21 14Q21 14.425 20.712 14.712Q20.425 15 20 15ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18Q3 17.575 3.288 17.288Q3.575 17 4 17H20Q20.425 17 20.712 17.288Q21 17.575 21 18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM4 11Q3.575 11 3.288 10.712Q3 10.425 3 10Q3 9.575 3.288 9.287Q3.575 9 4 9H20Q20.425 9 20.712 9.287Q21 9.575 21 10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM4 7Q3.575 7 3.288 6.713Q3 6.425 3 6Q3 5.575 3.288 5.287Q3.575 5 4 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialReorderRoundedFilled.displayName = 'AmauiIconMaterialReorderRoundedFilled';

export default IconMaterialReorderRoundedFilled;
