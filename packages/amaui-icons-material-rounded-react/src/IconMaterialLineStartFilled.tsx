import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartFilled'

      short_name='LineStart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 14.5q-1.05 0-1.775-.725Q2 13.05 2 12q0-1.05.725-1.775Q3.45 9.5 4.5 9.5q.775 0 1.4.425.625.425.9 1.075H21q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13H6.8q-.275.65-.9 1.075-.625.425-1.4.425Z"/>
    </Icon>
  );
});

IconMaterialLineStartFilled.displayName = 'AmauiIconMaterialLineStartFilled';

export default IconMaterialLineStartFilled;
