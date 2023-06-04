import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquare'

      short_name='EditSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23.7v-18h10.925l-2 2H5v14h14v-6.95l2-2V23.7Zm9-9Zm4.175-8.425 1.425 1.4-6.6 6.6V15.7h1.4l6.625-6.625 1.425 1.4-7.2 7.225H9v-4.25Zm4.275 4.2-4.275-4.2 3.95-3.95 4.2 4.275Z"/>
    </Icon>
  );
});

IconMaterialEditSquare.displayName = 'AmauiIconMaterialEditSquare';

export default IconMaterialEditSquare;
