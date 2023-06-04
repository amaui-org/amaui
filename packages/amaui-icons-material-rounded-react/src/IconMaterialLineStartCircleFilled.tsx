import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircleFilled'

      short_name='LineStartCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18q-2.5 0-4.25-1.75T2 12q0-2.5 1.75-4.25T8 6q2.25 0 3.913 1.425Q13.575 8.85 13.925 11H22v2h-8.075q-.35 2.15-2.012 3.575Q10.25 18 8 18Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircleFilled.displayName = 'AmauiIconMaterialLineStartCircleFilled';

export default IconMaterialLineStartCircleFilled;
