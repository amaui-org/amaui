import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeFilled'

      short_name='Stethoscope'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 22q-2.7 0-4.6-1.9Q7 18.2 7 15.5v-.575q-2.15-.35-3.575-2.013Q2 11.25 2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825Q6.35 13 8 13q1.65 0 2.825-1.175Q12 10.65 12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.912Q11.15 14.575 9 14.925v.575q0 1.875 1.312 3.188Q11.625 20 13.5 20q1.875 0 3.188-1.312Q18 17.375 18 15.5v-1.675q-.875-.3-1.438-1.075Q16 11.975 16 11q0-1.25.875-2.125T19 8q1.25 0 2.125.875T22 11q0 .975-.562 1.75-.563.775-1.438 1.075V15.5q0 2.7-1.9 4.6-1.9 1.9-4.6 1.9Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeFilled.displayName = 'AmauiIconMaterialStethoscopeFilled';

export default IconMaterialStethoscopeFilled;
