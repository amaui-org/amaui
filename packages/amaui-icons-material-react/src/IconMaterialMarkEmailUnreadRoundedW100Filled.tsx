import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadRoundedW100Filled'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M19 8.35Q18.025 8.35 17.338 7.662Q16.65 6.975 16.65 6Q16.65 5.025 17.338 4.337Q18.025 3.65 19 3.65Q19.975 3.65 20.663 4.337Q21.35 5.025 21.35 6Q21.35 6.975 20.663 7.662Q19.975 8.35 19 8.35ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H14.7Q14.675 5.475 14.663 5.637Q14.65 5.8 14.65 6Q14.65 6.75 14.887 7.425Q15.125 8.1 15.55 8.65L12 11L4.675 6.175Q4.55 6.1 4.412 6.125Q4.275 6.15 4.2 6.275Q4.1 6.4 4.138 6.537Q4.175 6.675 4.3 6.75L11.575 11.575Q11.775 11.7 12 11.7Q12.225 11.7 12.425 11.575L16.025 9.175Q16.6 9.725 17.363 10.037Q18.125 10.35 19 10.35Q19.425 10.35 19.863 10.262Q20.3 10.175 20.7 10V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadRoundedW100Filled.displayName = 'AmauiIconMaterialMarkEmailUnreadRoundedW100Filled';

export default IconMaterialMarkEmailUnreadRoundedW100Filled;
