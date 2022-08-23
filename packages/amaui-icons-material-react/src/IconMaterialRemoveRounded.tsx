import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRounded'
      short_name='Remove'

      {...props}
    >
      <path d="M6 13Q5.575 13 5.287 12.712Q5 12.425 5 12Q5 11.575 5.287 11.287Q5.575 11 6 11H18Q18.425 11 18.712 11.287Q19 11.575 19 12Q19 12.425 18.712 12.712Q18.425 13 18 13Z"/>
    </Icon>
  );
});

IconMaterialRemoveRounded.displayName = 'AmauiIconMaterialRemoveRounded';

export default IconMaterialRemoveRounded;
