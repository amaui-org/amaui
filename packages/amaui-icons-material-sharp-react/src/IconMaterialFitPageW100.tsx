import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageW100'

      short_name='FitPage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M140 916V236h40v680h-40Zm320 0v-40h40v40h-40Zm0-160v-40h40v40h-40ZM300 596v-40h40v40h-40Zm160 0v-40h40v40h-40Zm160 0v-40h40v40h-40ZM460 436v-40h40v40h-40Zm0-160v-40h40v40h-40Zm320 640V236h40v680h-40Z"/>
    </Icon>
  );
});

IconMaterialFitPageW100.displayName = 'AmauiIconMaterialFitPageW100';

export default IconMaterialFitPageW100;
