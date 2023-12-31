import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1W100Filled'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-420 174-174q4-4 9.5-4.5T674-594q5 5 5 10t-5 10L501-401q-9 9-21 9t-21-9L286-574q-4-4-4.5-9.5T286-594q5-5 10-5t10 5l174 174Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1W100Filled.displayName = 'AmauiIconMaterialStatMinus1W100Filled';

export default IconMaterialStatMinus1W100Filled;
