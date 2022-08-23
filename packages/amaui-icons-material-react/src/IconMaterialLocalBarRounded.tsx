import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalBarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarRounded'
      short_name='LocalBar'

      {...props}
    >
      <path d="M7 21Q6.575 21 6.287 20.712Q6 20.425 6 20Q6 19.575 6.287 19.288Q6.575 19 7 19H11V14L3.35 5.4Q3.2 5.225 3.1 4.962Q3 4.7 3 4.45Q3 3.85 3.425 3.425Q3.85 3 4.45 3H19.55Q20.15 3 20.575 3.425Q21 3.85 21 4.475Q21 4.7 20.9 4.962Q20.8 5.225 20.65 5.4L13 14V19H17Q17.425 19 17.712 19.288Q18 19.575 18 20Q18 20.425 17.712 20.712Q17.425 21 17 21ZM7.45 7H16.55L18.35 5H5.65ZM12 12.1 14.775 9H9.225ZM12 12.1Z"/>
    </Icon>
  );
});

IconMaterialLocalBarRounded.displayName = 'AmauiIconMaterialLocalBarRounded';

export default IconMaterialLocalBarRounded;
