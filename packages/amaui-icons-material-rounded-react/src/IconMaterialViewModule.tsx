import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModule'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.025 17V7q0-.825.588-1.412Q4.2 5 5.025 5H19q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19H5.025q-.825 0-1.412-.587-.588-.588-.588-1.413Zm12.65-6H19V7h-3.325v4Zm-5.325 0h3.325V7H10.35v4Zm-5.325 0H8.35V7H5.025v4Zm0 6H8.35v-4H5.025v4Zm5.325 0h3.325v-4H10.35v4Zm5.325 0H19v-4h-3.325v4Z"/>
    </Icon>
  );
});

IconMaterialViewModule.displayName = 'AmauiIconMaterialViewModule';

export default IconMaterialViewModule;
