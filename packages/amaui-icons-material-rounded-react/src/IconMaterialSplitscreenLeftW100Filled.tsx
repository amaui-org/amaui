import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLeftW100Filled'

      short_name='SplitscreenLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h96q26 0 43 17t17 43v496q0 26-17 43t-43 17h-96Zm336 0q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h96q26 0 43 17t17 43v496q0 26-17 43t-43 17h-96Zm128-556q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v496q0 12 10 22t22 10h96q12 0 22-10t10-22v-496Zm-160 0q0-12 10-22t22-10h96q12 0 22 10t10 22v496q0 12-10 22t-22 10h-96q-12 0-22-10t-10-22v-496Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLeftW100Filled.displayName = 'AmauiIconMaterialSplitscreenLeftW100Filled';

export default IconMaterialSplitscreenLeftW100Filled;
