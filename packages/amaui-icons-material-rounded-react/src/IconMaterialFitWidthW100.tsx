import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitWidthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitWidthW100'

      short_name='FitWidth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 916q-8.5 0-14.25-5.75T140 896V256q0-8.5 5.75-14.25T160 236q8.5 0 14.25 5.75T180 256v640q0 8.5-5.75 14.25T160 916Zm140-320v-40h40v40h-40Zm160 0v-40h40v40h-40Zm160 0v-40h40v40h-40Zm180 320q-8.5 0-14.25-5.75T780 896V256q0-8.5 5.75-14.25T800 236q8.5 0 14.25 5.75T820 256v640q0 8.5-5.75 14.25T800 916Z"/>
    </Icon>
  );
});

IconMaterialFitWidthW100.displayName = 'AmauiIconMaterialFitWidthW100';

export default IconMaterialFitWidthW100;
