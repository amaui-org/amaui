import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineRounded'
      short_name='Polyline'

      {...props}
    >
      <path d="M17 22Q16.175 22 15.588 21.413Q15 20.825 15 20V19.5L7.725 15.875Q7.525 15.925 7.375 15.962Q7.225 16 7 16H5Q4.175 16 3.587 15.412Q3 14.825 3 14V12Q3 11.175 3.587 10.587Q4.175 10 5 10H7Q7.075 10 7.138 10Q7.2 10 7.275 10.025L10.15 6.725Q10.075 6.575 10.038 6.387Q10 6.2 10 6V4Q10 3.175 10.588 2.587Q11.175 2 12 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6Q16 6.825 15.413 7.412Q14.825 8 14 8H12Q11.9 8 11.838 8Q11.775 8 11.725 7.975L8.875 11.25Q8.925 11.45 8.963 11.612Q9 11.775 9 12V14Q9 14.05 9 14.112Q9 14.175 8.975 14.225L15.125 17.3Q15.325 16.75 15.825 16.375Q16.325 16 17 16H19Q19.825 16 20.413 16.587Q21 17.175 21 18V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM12 6H14V4H12ZM5 14H7V12H5ZM17 20H19V18H17ZM13 5ZM6 13ZM18 19Z"/>
    </Icon>
  );
});

IconMaterialPolylineRounded.displayName = 'AmauiIconMaterialPolylineRounded';

export default IconMaterialPolylineRounded;
