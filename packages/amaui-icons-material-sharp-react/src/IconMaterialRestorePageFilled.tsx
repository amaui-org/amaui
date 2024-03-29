import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestorePageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageFilled'

      short_name='RestorePage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm8-4.25q1.95 0 3.35-1.4 1.4-1.4 1.4-3.35 0-1.95-1.4-3.35-1.4-1.4-3.35-1.4-.95 0-1.775.35t-1.475.95V8h-1.5v4.25h4.25v-1.5H9.7q.425-.45 1.025-.725.6-.275 1.275-.275 1.35 0 2.3.95.95.95.95 2.3 0 1.35-.95 2.3-.95.95-2.3.95-1.1 0-1.925-.637Q9.25 14.975 8.9 14H7.35q.35 1.625 1.638 2.688Q10.275 17.75 12 17.75Z"/>
    </Icon>
  );
});

IconMaterialRestorePageFilled.displayName = 'AmauiIconMaterialRestorePageFilled';

export default IconMaterialRestorePageFilled;
