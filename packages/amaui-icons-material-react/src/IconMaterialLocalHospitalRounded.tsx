import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalHospitalRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalRounded'
      short_name='LocalHospital'

      {...props}
    >
      <path d="M12 17Q12.625 17 13.062 16.562Q13.5 16.125 13.5 15.5V13.5H15.5Q16.125 13.5 16.562 13.062Q17 12.625 17 12Q17 11.375 16.562 10.938Q16.125 10.5 15.5 10.5H13.5V8.5Q13.5 7.875 13.062 7.438Q12.625 7 12 7Q11.375 7 10.938 7.438Q10.5 7.875 10.5 8.5V10.5H8.5Q7.875 10.5 7.438 10.938Q7 11.375 7 12Q7 12.625 7.438 13.062Q7.875 13.5 8.5 13.5H10.5V15.5Q10.5 16.125 10.938 16.562Q11.375 17 12 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalRounded.displayName = 'AmauiIconMaterialLocalHospitalRounded';

export default IconMaterialLocalHospitalRounded;
