import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightW100Filled'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h96q26 0 43 17t17 43v496q0 26-17 43t-43 17h-96Zm-336 0q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h96q26 0 43 17t17 43v496q0 26-17 43t-43 17h-96Zm-32-556v496q0 12 10 22t22 10h96q12 0 22-10t10-22v-496q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22Zm160 0v496q0 12-10 22t-22 10h-96q-12 0-22-10t-10-22v-496q0-12 10-22t22-10h96q12 0 22 10t10 22Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightW100Filled.displayName = 'AmauiIconMaterialSplitscreenRightW100Filled';

export default IconMaterialSplitscreenRightW100Filled;
