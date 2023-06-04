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
      <path d="M466 427 306 586q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l172-172q9-9 21-9t21 9l173 173q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L494 427v349q0 6-4 10t-10 4q-6 0-10-4t-4-10V427Z"/>
    </Icon>
  );
});

IconMaterialFitbitArrowUpwardW100.displayName = 'AmauiIconMaterialFitbitArrowUpwardW100';

export default IconMaterialFitbitArrowUpwardW100;
