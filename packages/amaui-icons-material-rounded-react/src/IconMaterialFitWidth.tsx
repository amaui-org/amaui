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
      <path d="M160 936q-17 0-28.5-11.5T120 896V256q0-17 11.5-28.5T160 216q17 0 28.5 11.5T200 256v640q0 17-11.5 28.5T160 936Zm120-320v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm200 320q-17 0-28.5-11.5T760 896V256q0-17 11.5-28.5T800 216q17 0 28.5 11.5T840 256v640q0 17-11.5 28.5T800 936Z"/>
    </Icon>
  );
});

IconMaterialFitWidth.displayName = 'AmauiIconMaterialFitWidth';

export default IconMaterialFitWidth;
