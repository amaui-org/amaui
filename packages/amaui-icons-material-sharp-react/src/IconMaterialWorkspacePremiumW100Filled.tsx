import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacePremiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumW100Filled'

      short_name='WorkspacePremium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 13.15.75-2.5-1.975-1.4h2.475L12 6.7l.75 2.55h2.475l-1.975 1.4.75 2.5-2-1.55ZM7.3 21v-6.25q-.95-.9-1.475-2.125Q5.3 11.4 5.3 10q0-2.8 1.95-4.75Q9.2 3.3 12 3.3t4.75 1.95Q18.7 7.2 18.7 10q0 1.4-.525 2.625T16.7 14.75V21L12 19.65Zm4.7-5q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumW100Filled.displayName = 'AmauiIconMaterialWorkspacePremiumW100Filled';

export default IconMaterialWorkspacePremiumW100Filled;
