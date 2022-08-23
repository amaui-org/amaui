import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRoundedW100'
      short_name='Send'

      {...props}
    >
      <path d="M4.3 16.925V7.075Q4.3 6.675 4.638 6.463Q4.975 6.25 5.35 6.4L17 11.3Q17.45 11.5 17.45 12Q17.45 12.5 17 12.7L5.35 17.6Q4.975 17.75 4.638 17.538Q4.3 17.325 4.3 16.925ZM5 17 16.85 12 5 7V11L9.5 12L5 13ZM5 12V7V11Q5 11 5 11Q5 11 5 11V13Q5 13 5 13Q5 13 5 13V17Z"/>
    </Icon>
  );
});

IconMaterialSendRoundedW100.displayName = 'AmauiIconMaterialSendRoundedW100';

export default IconMaterialSendRoundedW100;
