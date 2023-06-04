import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowUpwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowUpwardFilled'

      short_name='FitbitArrowUpward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 816V489L296 632l-56-56 240-240 240 240-56 56-144-143v327h-80Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowUpwardFilled.displayName = 'AmauiIconMaterialFitbitArrowUpwardFilled';

export default IconMaterialFitbitArrowUpwardFilled;
