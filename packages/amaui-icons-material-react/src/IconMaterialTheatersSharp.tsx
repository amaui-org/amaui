import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTheatersSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersSharp'
      short_name='Theaters'

      {...props}
    >
      <path d="M4 21V3H6V5H8V3H16V5H18V3H20V21H18V19H16V21H8V19H6V21ZM6 17H8V15H6ZM6 13H8V11H6ZM6 9H8V7H6ZM16 17H18V15H16ZM16 13H18V11H16ZM16 9H18V7H16ZM10 19H14V5H10ZM10 5H14Z"/>
    </Icon>
  );
});

IconMaterialTheatersSharp.displayName = 'AmauiIconMaterialTheatersSharp';

export default IconMaterialTheatersSharp;
