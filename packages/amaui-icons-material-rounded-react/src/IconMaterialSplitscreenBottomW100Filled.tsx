import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottomW100Filled'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-204q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-336q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm496-188H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10h496q12 0 22-10t10-22v-96q0-12-10-22t-22-10Zm0 160H232q-12 0-22-10t-10-22v-96q0-12 10-22t22-10h496q12 0 22 10t10 22v96q0 12-10 22t-22 10Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottomW100Filled.displayName = 'AmauiIconMaterialSplitscreenBottomW100Filled';

export default IconMaterialSplitscreenBottomW100Filled;
