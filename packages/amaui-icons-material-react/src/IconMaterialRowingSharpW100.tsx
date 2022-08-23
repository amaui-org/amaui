import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRowingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingSharpW100'
      short_name='Rowing'

      {...props}
    >
      <path d="M5.45 19.65 4.85 19.05 9.525 14.375 11.5 16.35H8.75ZM15 5.35Q14.425 5.35 14.038 4.962Q13.65 4.575 13.65 4Q13.65 3.425 14.038 3.037Q14.425 2.65 15 2.65Q15.575 2.65 15.963 3.037Q16.35 3.425 16.35 4Q16.35 4.575 15.963 4.962Q15.575 5.35 15 5.35ZM18.1 23 15.75 20.65V19.15L8.25 11.65Q8.025 11.7 7.875 11.725Q7.725 11.75 7.45 11.8V11.1Q8.625 10.95 10.175 10.112Q11.725 9.275 12.4 8.55L13.7 7.2Q13.9 6.975 14.225 6.812Q14.55 6.65 14.85 6.65Q15.5 6.65 15.875 7.025Q16.25 7.4 16.25 8.05V14Q16.25 14.725 15.925 15.262Q15.6 15.8 15.125 16.1L13.25 14.225V8.7Q12.225 9.725 11.138 10.387Q10.05 11.05 9 11.4L16.25 18.65H17.75L20.1 21Z"/>
    </Icon>
  );
});

IconMaterialRowingSharpW100.displayName = 'AmauiIconMaterialRowingSharpW100';

export default IconMaterialRowingSharpW100;
