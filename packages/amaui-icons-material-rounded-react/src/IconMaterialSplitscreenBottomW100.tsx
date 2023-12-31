import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottomW100'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-204q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-336q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm496-188H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10h496q12 0 22-10t10-22v-96q0-12-10-22t-22-10ZM200-568v-160 160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottomW100.displayName = 'AmauiIconMaterialSplitscreenBottomW100';

export default IconMaterialSplitscreenBottomW100;
