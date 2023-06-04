import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageW100Filled'

      short_name='FitPage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 916q-8.5 0-14.25-5.75T140 896V256q0-8.5 5.75-14.25T160 236q8.5 0 14.25 5.75T180 256v640q0 8.5-5.75 14.25T160 916Zm300 0v-40h40v40h-40Zm0-160v-40h40v40h-40ZM300 596v-40h40v40h-40Zm160 0v-40h40v40h-40Zm160 0v-40h40v40h-40ZM460 436v-40h40v40h-40Zm0-160v-40h40v40h-40Zm340 640q-8.5 0-14.25-5.75T780 896V256q0-8.5 5.75-14.25T800 236q8.5 0 14.25 5.75T820 256v640q0 8.5-5.75 14.25T800 916Z"/>
    </Icon>
  );
});

IconMaterialFitPageW100Filled.displayName = 'AmauiIconMaterialFitPageW100Filled';

export default IconMaterialFitPageW100Filled;
