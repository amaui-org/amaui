import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScheduleSendSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendSharpFilled'
      short_name='ScheduleSend'

      {...props}
    >
      <path d="M3 20V14L11 12L3 10V4L17.3 10Q17.225 10 17.15 10Q17.075 10 17 10Q14.075 10 12.038 12.062Q10 14.125 10 17.05Q10 17.05 10 17.05Q10 17.05 10 17.05ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM18.65 19.35 19.35 18.65 17.5 16.8V14H16.5V17.2Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendSharpFilled.displayName = 'AmauiIconMaterialScheduleSendSharpFilled';

export default IconMaterialScheduleSendSharpFilled;
