import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditAttributesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesSharpFilled'
      short_name='EditAttributes'

      {...props}
    >
      <path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17ZM8.05 14.3 11.6 10.75 10.55 9.7 8.05 12.2 7.05 11.2 6 12.25Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesSharpFilled.displayName = 'AmauiIconMaterialEditAttributesSharpFilled';

export default IconMaterialEditAttributesSharpFilled;
