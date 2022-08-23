import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuRounded'
      short_name='Menu'

      {...props}
    >
      <path d="M4 18Q3.575 18 3.288 17.712Q3 17.425 3 17Q3 16.575 3.288 16.288Q3.575 16 4 16H20Q20.425 16 20.712 16.288Q21 16.575 21 17Q21 17.425 20.712 17.712Q20.425 18 20 18ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H20Q20.425 6 20.712 6.287Q21 6.575 21 7Q21 7.425 20.712 7.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialMenuRounded.displayName = 'AmauiIconMaterialMenuRounded';

export default IconMaterialMenuRounded;
