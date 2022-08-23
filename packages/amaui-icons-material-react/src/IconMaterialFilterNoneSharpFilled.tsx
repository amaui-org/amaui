import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterNoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneSharpFilled'
      short_name='FilterNone'

      {...props}
    >
      <path d="M6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneSharpFilled.displayName = 'AmauiIconMaterialFilterNoneSharpFilled';

export default IconMaterialFilterNoneSharpFilled;
