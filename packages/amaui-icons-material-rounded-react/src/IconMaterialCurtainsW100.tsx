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
      <path d="M6 19h4.575q-.2-2-1.325-3.988Q8.125 13.025 6 12.475ZM6 5.8v5.725q2.125-.55 3.25-2.537Q10.375 7 10.575 5H6.8q-.35 0-.575.225Q6 5.45 6 5.8Zm.775 6.2q2.075.775 3.2 2.825Q11.1 16.875 11.3 19h1.4q.2-2.125 1.325-4.175t3.2-2.825q-2.1-.775-3.225-2.825Q12.875 7.125 12.675 5H11.3q-.2 2.125-1.325 4.175T6.775 12ZM18 11.525V5.8q0-.35-.225-.575Q17.55 5 17.2 5h-3.8q.2 2 1.325 3.988Q15.85 10.975 18 11.525ZM18 19v-6.525q-2.15.55-3.262 2.537Q13.625 17 13.425 19Zm-14.35.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6 5.8V5v6.525ZM18 19v-6.525ZM6 19v-6.525V19Zm12-7.475V5 5.8Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100.displayName = 'AmauiIconMaterialCurtainsW100';

export default IconMaterialCurtainsW100;
