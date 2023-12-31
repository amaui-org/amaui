import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenTopW100'

      short_name='SplitscreenTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-540q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0 336q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h496q26 0 43 17t17 43v96q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-96q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10Zm-32-160v160-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenTopW100.displayName = 'AmauiIconMaterialSplitscreenTopW100';

export default IconMaterialSplitscreenTopW100;
