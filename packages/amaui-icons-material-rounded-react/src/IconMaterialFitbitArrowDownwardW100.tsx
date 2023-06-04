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
      <path d="M466 736V387q0-6 4-10t10-4q6 0 10 4t4 10v349l160-159q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10L501 769q-9 9-21 9t-21-9L286 596q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l160 159Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowDownwardW100.displayName = 'AmauiIconMaterialFitbitArrowDownwardW100';

export default IconMaterialFitbitArrowDownwardW100;
