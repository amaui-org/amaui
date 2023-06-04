import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRight'

      short_name='TurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17.17,11l-1.59,1.59L17,14l4-4l-4-4l-1.41,1.41L17.17,9L9,9c-1.1,0-2,0.9-2,2v9h2v-9L17.17,11z"/></g>
    </Icon>
  );
});

IconMaterialTurnRight.displayName = 'AmauiIconMaterialTurnRight';

export default IconMaterialTurnRight;
