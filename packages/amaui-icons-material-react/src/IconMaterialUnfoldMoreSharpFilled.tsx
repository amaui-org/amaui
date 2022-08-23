import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreSharpFilled'
      short_name='UnfoldMore'

      {...props}
    >
      <path d="M8.95 9.05 7.5 7.6 12 3.1 16.5 7.6 15.05 9.05 12 6ZM12 21 7.5 16.5 8.95 15.05 12 18.1 15.05 15.05 16.5 16.5Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreSharpFilled.displayName = 'AmauiIconMaterialUnfoldMoreSharpFilled';

export default IconMaterialUnfoldMoreSharpFilled;
