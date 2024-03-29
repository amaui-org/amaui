import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDownFilled'

      short_name='MoveDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 21-1.4-1.4 1.575-1.65q-2.625-.3-4.4-2.275Q1 13.7 1 11q0-2.925 2.038-4.963Q5.075 4 8 4h3v2H8Q5.925 6 4.463 7.462 3 8.925 3 11q0 1.85 1.162 3.2 1.163 1.35 2.913 1.7L5.6 14.425 7 13l4 4Zm6-1v-7h9v7Zm0-9V4h9v7Zm2-2h5V6h-5Z"/>
    </Icon>
  );
});

IconMaterialMoveDownFilled.displayName = 'AmauiIconMaterialMoveDownFilled';

export default IconMaterialMoveDownFilled;
