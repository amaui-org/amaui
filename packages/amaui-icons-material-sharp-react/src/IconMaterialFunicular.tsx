import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunicular = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Funicular'

      short_name='Funicular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-40v-80l200-55v-105H120v-440H80v-80h120v-80h560v80h120v80h-40v360H720v55l200-55v80L40-40Zm320-167 240-66v-87h-80v80H360v73ZM200-360h240v-40H200v40Zm320-80h240v-40H520v40Zm-320-40h240v-240H200v240Zm320-80h240v-160H520v160Zm-80 200v-40 40Zm80-80v-40 40Z"/>
    </Icon>
  );
});

IconMaterialFunicular.displayName = 'AmauiIconMaterialFunicular';

export default IconMaterialFunicular;
