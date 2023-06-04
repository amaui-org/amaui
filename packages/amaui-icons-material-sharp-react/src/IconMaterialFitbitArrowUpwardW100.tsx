import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitArrowUpwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitArrowUpwardW100'

      short_name='FitbitArrowUpward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 790V427L296 596l-19-20 203-203 203 203-19 20-170-169v363h-28Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowUpwardW100.displayName = 'AmauiIconMaterialFitbitArrowUpwardW100';

export default IconMaterialFitbitArrowUpwardW100;
