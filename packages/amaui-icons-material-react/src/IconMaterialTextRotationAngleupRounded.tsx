import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationAngleupRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupRounded'
      short_name='TextRotationAngleup'

      {...props}
    >
      <path d="M8.775 21.025Q8.475 20.725 8.475 20.312Q8.475 19.9 8.775 19.6L17.4 10.975H16.8Q16.375 10.975 16.087 10.7Q15.8 10.425 15.8 10Q15.8 9.575 16.087 9.287Q16.375 9 16.8 9H19.8Q20.225 9 20.525 9.3Q20.825 9.6 20.825 10.025V13Q20.825 13.425 20.538 13.712Q20.25 14 19.825 14Q19.4 14 19.1 13.712Q18.8 13.425 18.8 13V12.4L10.175 21.025Q9.875 21.325 9.475 21.325Q9.075 21.325 8.775 21.025ZM8.95 15.175Q8.575 15.55 8.15 15.475Q7.725 15.4 7.5 14.9L3.575 6.3Q3.4 5.925 3.488 5.463Q3.575 5 3.875 4.7Q4.15 4.425 4.625 4.325Q5.1 4.225 5.475 4.4L14.075 8.325Q14.575 8.55 14.65 8.975Q14.725 9.4 14.325 9.8Q14.15 9.975 13.875 10.025Q13.6 10.075 13.375 9.95L11.25 8.9L8.1 12.05L9.125 14.2Q9.25 14.425 9.2 14.7Q9.15 14.975 8.95 15.175ZM7.375 10.525 9.7 8.2 5.35 6.125 5.3 6.175Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupRounded.displayName = 'AmauiIconMaterialTextRotationAngleupRounded';

export default IconMaterialTextRotationAngleupRounded;
