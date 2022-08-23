import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationNoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneSharpFilled'
      short_name='TextRotationNone'

      {...props}
    >
      <path d="M4 19V17H17.2L16.15 15.95L17.55 14.55L21 18L17.55 21.45L16.15 20.05L17.2 19ZM6.9 14 11 3H13L17.1 14H15.2L14.25 11.2H9.8L8.8 14ZM10.35 9.6H13.65L12.05 5.05H11.95Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneSharpFilled.displayName = 'AmauiIconMaterialTextRotationNoneSharpFilled';

export default IconMaterialTextRotationNoneSharpFilled;
