import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterNoneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneSharp'
      short_name='FilterNone'

      {...props}
    >
      <path d="M6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 4V16Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneSharp.displayName = 'AmauiIconMaterialFilterNoneSharp';

export default IconMaterialFilterNoneSharp;
