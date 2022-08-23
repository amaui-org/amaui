import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardSharpFilled'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardSharpFilled.displayName = 'AmauiIconMaterialArrowOutwardSharpFilled';

export default IconMaterialArrowOutwardSharpFilled;
