import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDinnerDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDining'

      short_name='DinnerDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4 21-2-2h20l-2 2Zm-1-3q.15-.45.4-.85.25-.4.6-.75V9H3V7.5h1v-.75H3v-1.5h1V4.5H3V3h9v2.25h9v1.5h-9V9H8v6.1q.375.05.713.15.337.1.637.3.6-1.55 1.988-2.55 1.387-1 3.162-1 2.425 0 4.05 1.775T19.95 18Zm8.35-2h6.3q-.45-.95-1.275-1.475Q15.55 14 14.5 14q-1.025 0-1.875.55-.85.55-1.275 1.45ZM8 5.25h2V4.5H8ZM8 7.5h2v-.75H8ZM5.5 5.25h1V4.5h-1Zm0 2.25h1v-.75h-1Zm0 7.85q.225-.125.475-.188.25-.062.525-.112V9h-1Zm5.85.65H17.65Z"/>
    </Icon>
  );
});

IconMaterialDinnerDining.displayName = 'AmauiIconMaterialDinnerDining';

export default IconMaterialDinnerDining;
