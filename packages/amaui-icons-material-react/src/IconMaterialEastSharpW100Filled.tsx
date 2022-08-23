import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastSharpW100Filled'
      short_name='East'

      {...props}
    >
      <path d="M14.3 18.175 13.8 17.675 19.125 12.35H3.025V11.65H19.125L13.8 6.325L14.3 5.825L20.475 12Z"/>
    </Icon>
  );
});

IconMaterialEastSharpW100Filled.displayName = 'AmauiIconMaterialEastSharpW100Filled';

export default IconMaterialEastSharpW100Filled;
