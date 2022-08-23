import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarSharpFilled'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M4 15V9H6V13H18V9H20V15Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarSharpFilled.displayName = 'AmauiIconMaterialSpaceBarSharpFilled';

export default IconMaterialSpaceBarSharpFilled;
