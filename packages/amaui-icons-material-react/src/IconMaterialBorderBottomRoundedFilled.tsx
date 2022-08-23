import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderBottomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomRoundedFilled'
      short_name='BorderBottom'

      {...props}
    >
      <path d="M7 5V3H9V5ZM7 13V11H9V13ZM11 13V11H13V13ZM11 5V3H13V5ZM3 9V7H5V9ZM3 5V3H5V5ZM3 13V11H5V13ZM3 17V15H5V17ZM11 9V7H13V9ZM19 17V15H21V17ZM19 13V11H21V13ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM19 9V7H21V9ZM15 5V3H17V5ZM11 17V15H13V17ZM19 5V3H21V5ZM15 13V11H17V13Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomRoundedFilled.displayName = 'AmauiIconMaterialBorderBottomRoundedFilled';

export default IconMaterialBorderBottomRoundedFilled;
