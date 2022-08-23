import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareSharpFilled'
      short_name='EditSquare'

      {...props}
    >
      <path d="M3 23.7v-18h10.925L7 12.625V19.7h7.075L21 12.75V23.7Zm6-6v-4.25l7.175-7.175 4.275 4.2-7.2 7.225Zm12.875-8.65L17.6 4.85l2.525-2.525 4.2 4.275Z"/>
    </Icon>
  );
});

IconMaterialEditSquareSharpFilled.displayName = 'AmauiIconMaterialEditSquareSharpFilled';

export default IconMaterialEditSquareSharpFilled;
