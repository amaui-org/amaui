import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderVerticalRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalRoundedFilled'
      short_name='BorderVertical'

      {...props}
    >
      <path d="M3 21V19H5V21ZM3 17V15H5V17ZM3 13V11H5V13ZM3 9V7H5V9ZM3 5V3H5V5ZM7 21V19H9V21ZM7 13V11H9V13ZM7 5V3H9V5ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM15 21V19H17V21ZM15 13V11H17V13ZM15 5V3H17V5ZM19 21V19H21V21ZM19 17V15H21V17ZM19 13V11H21V13ZM19 9V7H21V9ZM19 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalRoundedFilled.displayName = 'AmauiIconMaterialBorderVerticalRoundedFilled';

export default IconMaterialBorderVerticalRoundedFilled;
