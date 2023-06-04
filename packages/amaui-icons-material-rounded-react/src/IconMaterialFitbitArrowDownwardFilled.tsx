import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowDownwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowDownwardFilled'

      short_name='FitbitArrowDownward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 663V376q0-17 11.5-28.5T480 336q17 0 28.5 11.5T520 376v287l116-115q11-11 27.5-11.5T692 548q11 11 11 28t-11 28L508 788q-12 12-28 12t-28-12L268 604q-11-11-11.5-27.5T268 548q11-11 28-11t28 11l116 115Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowDownwardFilled.displayName = 'AmauiIconMaterialFitbitArrowDownwardFilled';

export default IconMaterialFitbitArrowDownwardFilled;
