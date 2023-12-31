import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddW100'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-192 1-1 192Zm32 28q-26 0-43-17t-17-43v-128q0-26 17-43t43-17h496q17 0 30 7.5t21 20.5H232q-14 0-23 9t-9 23v128q0 14 9 23t23 9h322q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm0-367q-26 0-43-17t-17-43v-129q0-26 17-43t43-17h496q26 0 43 17t17 43v129q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-129q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v129q0 14 9 23t23 9Zm-32 0v-193 193Zm560 395h-78q-6 0-10-4t-4-10q0-6 4-10t10-4h78v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h78q6 0 10 4t4 10q0 6-4 10t-10 4h-78v78q0 6-4 10t-10 4q-6 0-10-4t-4-10v-78Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddW100.displayName = 'AmauiIconMaterialSplitscreenAddW100';

export default IconMaterialSplitscreenAddW100;
