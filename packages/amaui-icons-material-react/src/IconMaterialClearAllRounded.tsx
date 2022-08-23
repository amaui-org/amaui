import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllRounded'
      short_name='ClearAll'

      {...props}
    >
      <path d="M18 13H6Q5.575 13 5.287 12.712Q5 12.425 5 12Q5 11.575 5.287 11.287Q5.575 11 6 11H18Q18.425 11 18.712 11.287Q19 11.575 19 12Q19 12.425 18.712 12.712Q18.425 13 18 13ZM16 17H4Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H16Q16.425 15 16.712 15.287Q17 15.575 17 16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM20 9H8Q7.575 9 7.287 8.712Q7 8.425 7 8Q7 7.575 7.287 7.287Q7.575 7 8 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9Z"/>
    </Icon>
  );
});

IconMaterialClearAllRounded.displayName = 'AmauiIconMaterialClearAllRounded';

export default IconMaterialClearAllRounded;
