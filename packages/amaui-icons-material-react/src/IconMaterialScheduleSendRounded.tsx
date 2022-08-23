import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScheduleSendRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendRounded'
      short_name='ScheduleSend'

      {...props}
    >
      <path d="M3 18.5V5.5Q3 4.95 3.438 4.662Q3.875 4.375 4.375 4.575L17.3 10Q17.225 10 17.15 10Q17.075 10 17 10Q16.125 10 15.35 10.2Q14.575 10.4 13.85 10.75L5 7V10.5L11 12L5 13.5V17L10.4 14.7Q10.2 15.275 10.1 15.837Q10 16.4 10 17Q10 17 10 17.025Q10 17.05 10 17.05L4.4 19.425Q3.9 19.625 3.45 19.337Q3 19.05 3 18.5ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM19 19Q19.15 18.85 19.15 18.65Q19.15 18.45 19 18.3L17.5 16.8V14.5Q17.5 14.3 17.35 14.15Q17.2 14 17 14Q16.8 14 16.65 14.15Q16.5 14.3 16.5 14.5V16.9Q16.5 17.05 16.55 17.175Q16.6 17.3 16.725 17.425L18.3 19Q18.45 19.15 18.65 19.15Q18.85 19.15 19 19ZM5 14.7Q5 13.5 5 12.45Q5 11.4 5 10.75V7V10.5Q5 10.5 5 10.5Q5 10.5 5 10.5V13.5Q5 13.5 5 13.5Q5 13.5 5 13.5V17Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendRounded.displayName = 'AmauiIconMaterialScheduleSendRounded';

export default IconMaterialScheduleSendRounded;
