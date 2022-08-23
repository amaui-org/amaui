import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodSharpFilled'
      short_name='Aod'

      {...props}
    >
      <path d="M8 11.5V10H16V11.5ZM9 14.5V13H15V14.5ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialAodSharpFilled.displayName = 'AmauiIconMaterialAodSharpFilled';

export default IconMaterialAodSharpFilled;
