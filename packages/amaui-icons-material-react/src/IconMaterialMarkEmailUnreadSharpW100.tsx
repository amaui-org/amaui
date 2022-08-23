import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadSharpW100'
      short_name='MarkEmailUnread'

      {...props}
    >
      <path d="M3.3 18.7V5.3H14.7Q14.675 5.475 14.663 5.637Q14.65 5.8 14.65 6H4.4L12 11L15.55 8.65Q15.675 8.775 15.788 8.912Q15.9 9.05 16.025 9.175L12 11.85L4 6.55V18H20V10.225Q20.2 10.175 20.363 10.125Q20.525 10.075 20.7 10V18.7ZM4 6V6.55V18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6ZM19 8.35Q18.025 8.35 17.338 7.662Q16.65 6.975 16.65 6Q16.65 5.025 17.338 4.337Q18.025 3.65 19 3.65Q19.975 3.65 20.663 4.337Q21.35 5.025 21.35 6Q21.35 6.975 20.663 7.662Q19.975 8.35 19 8.35Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadSharpW100.displayName = 'AmauiIconMaterialMarkEmailUnreadSharpW100';

export default IconMaterialMarkEmailUnreadSharpW100;
