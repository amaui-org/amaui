import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchCaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCaseFilled'

      short_name='MatchCase'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m159 776 150-400h72l150 400h-69l-36-102H264l-36 102h-69Zm126-160h120l-58-166h-4l-58 166Zm369 171q-49 0-77-25.5T549 692q0-42 32.5-68.5T665 597q23 0 42.5 3.5T741 612v-14q0-27-18.5-43T672 539q-21 0-39.5 9T601 574l-43-32q19-27 48-41t67-14q62 0 95 29.5t33 85.5v176h-59v-34h-3q-13 20-35 31.5T654 787Zm10-50q32 0 54.5-22.5T741 660q-14-8-32-12t-33-4q-32 0-49 12.5T610 692q0 20 15 32.5t39 12.5Z"/>
    </Icon>
  );
});

IconMaterialMatchCaseFilled.displayName = 'AmauiIconMaterialMatchCaseFilled';

export default IconMaterialMatchCaseFilled;
