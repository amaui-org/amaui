import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeCommentRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentRoundedW100'
      short_name='ModeComment'

      {...props}
    >
      <path d="M19.425 18.225 17.9 16.7H4.8Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V17.7Q20.7 18.2 20.238 18.387Q19.775 18.575 19.425 18.225ZM4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16H18.2L20 17.8V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8V17.8V16Q4 16 4 15.775Q4 15.55 4 15.2V4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8Z"/>
    </Icon>
  );
});

IconMaterialModeCommentRoundedW100.displayName = 'AmauiIconMaterialModeCommentRoundedW100';

export default IconMaterialModeCommentRoundedW100;
