import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircle'

      short_name='LineStartCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16q1.65 0 2.825-1.175Q12 13.65 12 12q0-1.65-1.175-2.825Q9.65 8 8 8 6.35 8 5.175 9.175 4 10.35 4 12q0 1.65 1.175 2.825Q6.35 16 8 16Zm0 2q-2.5 0-4.25-1.75T2 12q0-2.5 1.75-4.25T8 6q2.25 0 3.913 1.425Q13.575 8.85 13.925 11H22v2h-8.075q-.35 2.15-2.012 3.575Q10.25 18 8 18Zm0-6Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircle.displayName = 'AmauiIconMaterialLineStartCircle';

export default IconMaterialLineStartCircle;
