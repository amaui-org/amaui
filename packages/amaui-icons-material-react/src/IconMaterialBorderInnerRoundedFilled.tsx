import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderInnerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerRoundedFilled'
      short_name='BorderInner'

      {...props}
    >
      <path d="M3 21V19H5V21ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H11V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13H13V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM3 17V15H5V17ZM3 9V7H5V9ZM3 5V3H5V5ZM7 21V19H9V21ZM7 5V3H9V5ZM15 21V19H17V21ZM15 5V3H17V5ZM19 21V19H21V21ZM19 17V15H21V17ZM19 9V7H21V9ZM19 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerRoundedFilled.displayName = 'AmauiIconMaterialBorderInnerRoundedFilled';

export default IconMaterialBorderInnerRoundedFilled;
