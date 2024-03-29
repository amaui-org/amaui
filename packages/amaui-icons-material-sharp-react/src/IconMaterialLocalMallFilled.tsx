import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalMallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallFilled'

      short_name='LocalMall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V6h4q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6h4v16ZM9 6h6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm3 8q2.075 0 3.538-1.463Q17 11.075 17 9h-2q0 1.25-.875 2.125T12 12q-1.25 0-2.125-.875T9 9H7q0 2.075 1.463 3.537Q9.925 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialLocalMallFilled.displayName = 'AmauiIconMaterialLocalMallFilled';

export default IconMaterialLocalMallFilled;
