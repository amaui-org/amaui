import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatabaseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseRounded'
      short_name='Database'

      {...props}
    >
      <path d="M12 11Q8.25 11 5.625 9.825Q3 8.65 3 7Q3 5.35 5.625 4.175Q8.25 3 12 3Q15.75 3 18.375 4.175Q21 5.35 21 7Q21 8.65 18.375 9.825Q15.75 11 12 11ZM12 16Q8.25 16 5.625 14.825Q3 13.65 3 12V9.5Q3 10.6 4.025 11.363Q5.05 12.125 6.475 12.6Q7.9 13.075 9.438 13.287Q10.975 13.5 12 13.5Q13.025 13.5 14.562 13.287Q16.1 13.075 17.525 12.6Q18.95 12.125 19.975 11.363Q21 10.6 21 9.5V12Q21 13.65 18.375 14.825Q15.75 16 12 16ZM12 21Q8.25 21 5.625 19.825Q3 18.65 3 17V14.5Q3 15.6 4.025 16.363Q5.05 17.125 6.475 17.6Q7.9 18.075 9.438 18.288Q10.975 18.5 12 18.5Q13.025 18.5 14.562 18.288Q16.1 18.075 17.525 17.6Q18.95 17.125 19.975 16.363Q21 15.6 21 14.5V17Q21 18.65 18.375 19.825Q15.75 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDatabaseRounded.displayName = 'AmauiIconMaterialDatabaseRounded';

export default IconMaterialDatabaseRounded;
