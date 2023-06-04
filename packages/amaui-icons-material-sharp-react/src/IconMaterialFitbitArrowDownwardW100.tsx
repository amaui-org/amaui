import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowDownwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowDownwardW100'

      short_name='FitbitArrowDownward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 790 277 587l19-20 170 169V373h28v363l170-169 19 20-203 203Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowDownwardW100.displayName = 'AmauiIconMaterialFitbitArrowDownwardW100';

export default IconMaterialFitbitArrowDownwardW100;
