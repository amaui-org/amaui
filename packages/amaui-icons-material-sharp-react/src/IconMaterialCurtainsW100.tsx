import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsW100'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6 19h4.575q-.2-2-1.325-3.988Q8.125 13.025 6 12.475ZM6 5v6.525q2.125-.55 3.25-2.537Q10.375 7 10.575 5Zm.775 7q2.075.775 3.2 2.825Q11.1 16.875 11.3 19h1.4q.2-2.125 1.325-4.175t3.2-2.825q-2.1-.775-3.225-2.825Q12.875 7.125 12.675 5H11.3q-.2 2.125-1.325 4.175T6.775 12ZM18 5h-4.6q.2 2 1.325 3.988Q15.85 10.975 18 11.525Zm0 14v-6.525q-2.15.55-3.262 2.537Q13.625 17 13.425 19ZM6 5v6.525Zm12 0v6.525V5Zm0 14v-6.525ZM6 19v-6.525V19Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100.displayName = 'AmauiIconMaterialCurtainsW100';

export default IconMaterialCurtainsW100;
