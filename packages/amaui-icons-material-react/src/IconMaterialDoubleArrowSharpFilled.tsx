import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoubleArrowSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowSharpFilled'
      short_name='DoubleArrow'

      {...props}
    >
      <path d="M12 19 17 12 12 5H14.45L19.45 12L14.45 19ZM6.05 19 11.05 12 6.05 5H8.5L13.5 12L8.5 19Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowSharpFilled.displayName = 'AmauiIconMaterialDoubleArrowSharpFilled';

export default IconMaterialDoubleArrowSharpFilled;
