import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseSharpFilled'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M9 14H11V6H9ZM13 14H15V6H13ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialAutoReadPauseSharpFilled;
