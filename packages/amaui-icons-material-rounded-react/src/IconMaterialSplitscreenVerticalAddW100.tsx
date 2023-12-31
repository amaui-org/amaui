import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddW100'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-760H568h192Zm-220 32q0-26 17-43t43-17h128q26 0 43 17t17 43v322q0 6-4 10t-10 4q-6 0-10-4t-4-10v-322q0-14-9-23t-23-9H600q-14 0-23 9t-9 23v548q-14-8-21-21.5t-7-30.5v-496ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h129q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm161-556q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9h129q14 0 23-9t9-23v-496Zm0-32H200h193Zm367 588h-78q-6 0-10-4t-4-10q0-6 4-10t10-4h78v-78q0-6 4-10t10-4q6 0 10 4t4 10v78h78q6 0 10 4t4 10q0 6-4 10t-10 4h-78v78q0 6-4 10t-10 4q-6 0-10-4t-4-10v-78Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddW100.displayName = 'AmauiIconMaterialSplitscreenVerticalAddW100';

export default IconMaterialSplitscreenVerticalAddW100;
