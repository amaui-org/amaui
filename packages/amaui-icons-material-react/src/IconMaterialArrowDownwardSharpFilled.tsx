import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardSharpFilled'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 20 4 12 5.4 10.575 11 16.175V4H13V16.175L18.6 10.575L20 12Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardSharpFilled.displayName = 'AmauiIconMaterialArrowDownwardSharpFilled';

export default IconMaterialArrowDownwardSharpFilled;
