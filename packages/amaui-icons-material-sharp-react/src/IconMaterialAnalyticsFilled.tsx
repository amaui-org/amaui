import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnalyticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsFilled'

      short_name='Analytics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm4-4h2v-5H7Zm8 0h2V7h-2Zm-4 0h2v-3h-2Zm0-5h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsFilled.displayName = 'AmauiIconMaterialAnalyticsFilled';

export default IconMaterialAnalyticsFilled;
