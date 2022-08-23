import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassTopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassTopRoundedW100'
      short_name='HourglassTop'

      {...props}
    >
      <path d="M8.4 20H15.6V17Q15.6 15.3 14.6 14Q13.6 12.7 12 12.7Q10.4 12.7 9.4 14Q8.4 15.3 8.4 17ZM18.1 20.7H5.9Q5.75 20.7 5.65 20.6Q5.55 20.5 5.55 20.35Q5.55 20.2 5.65 20.1Q5.75 20 5.9 20H7.7V17Q7.7 15.2 8.738 13.787Q9.775 12.375 11.5 12Q9.775 11.625 8.738 10.212Q7.7 8.8 7.7 7V4H5.9Q5.75 4 5.65 3.9Q5.55 3.8 5.55 3.65Q5.55 3.5 5.65 3.4Q5.75 3.3 5.9 3.3H18.1Q18.25 3.3 18.35 3.4Q18.45 3.5 18.45 3.65Q18.45 3.8 18.35 3.9Q18.25 4 18.1 4H16.3V7Q16.3 8.8 15.263 10.212Q14.225 11.625 12.5 12Q14.225 12.375 15.263 13.787Q16.3 15.2 16.3 17V20H18.1Q18.25 20 18.35 20.1Q18.45 20.2 18.45 20.35Q18.45 20.5 18.35 20.6Q18.25 20.7 18.1 20.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassTopRoundedW100.displayName = 'AmauiIconMaterialHourglassTopRoundedW100';

export default IconMaterialHourglassTopRoundedW100;
