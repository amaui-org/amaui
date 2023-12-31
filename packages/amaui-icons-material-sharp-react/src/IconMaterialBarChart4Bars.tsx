import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChart4Bars = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChart4Bars'

      short_name='BarChart4Bars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/>
    </Icon>
  );
});

IconMaterialBarChart4Bars.displayName = 'AmauiIconMaterialBarChart4Bars';

export default IconMaterialBarChart4Bars;
