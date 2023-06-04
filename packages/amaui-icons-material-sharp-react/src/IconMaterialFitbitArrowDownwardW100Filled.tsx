import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowDownwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowDownwardW100Filled'

      short_name='FitbitArrowDownward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 790 277 587l19-20 170 169V373h28v363l170-169 19 20-203 203Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowDownwardW100Filled.displayName = 'AmauiIconMaterialFitbitArrowDownwardW100Filled';

export default IconMaterialFitbitArrowDownwardW100Filled;
