import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitWidth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitWidth'

      short_name='FitWidth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V216h80v720h-80Zm160-320v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 320V216h80v720h-80Z"/>
    </Icon>
  );
});

IconMaterialFitWidth.displayName = 'AmauiIconMaterialFitWidth';

export default IconMaterialFitWidth;
