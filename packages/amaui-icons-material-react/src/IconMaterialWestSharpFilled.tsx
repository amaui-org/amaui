import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestSharpFilled'
      short_name='West'

      {...props}
    >
      <path d="M9 19 2 12 9 5 10.425 6.4 5.825 11H22V13H5.825L10.4 17.6Z"/>
    </Icon>
  );
});

IconMaterialWestSharpFilled.displayName = 'AmauiIconMaterialWestSharpFilled';

export default IconMaterialWestSharpFilled;
