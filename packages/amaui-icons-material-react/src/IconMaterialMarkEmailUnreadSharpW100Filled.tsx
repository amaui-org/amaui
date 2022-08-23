import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadSharpW100Filled'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M19 8.35Q18.025 8.35 17.338 7.662Q16.65 6.975 16.65 6Q16.65 5.025 17.338 4.337Q18.025 3.65 19 3.65Q19.975 3.65 20.663 4.337Q21.35 5.025 21.35 6Q21.35 6.975 20.663 7.662Q19.975 8.35 19 8.35ZM3.3 18.7V5.3H14.7Q14.675 5.475 14.663 5.637Q14.65 5.8 14.65 6Q14.65 6.75 14.887 7.425Q15.125 8.1 15.55 8.65L12 11L4.4 6L4 6.55L12 11.85L16.025 9.175Q16.6 9.725 17.363 10.037Q18.125 10.35 19 10.35Q19.425 10.35 19.863 10.262Q20.3 10.175 20.7 10V18.7Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadSharpW100Filled.displayName = 'AmauiIconMaterialMarkEmailUnreadSharpW100Filled';

export default IconMaterialMarkEmailUnreadSharpW100Filled;
