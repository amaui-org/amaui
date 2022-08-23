import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamIndoorRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIndoorRounded'
      short_name='NestCamIndoor'

      {...props}
    >
      <path d="M12 11Q11.175 11 10.588 10.412Q10 9.825 10 9Q10 8.175 10.588 7.587Q11.175 7 12 7Q12.825 7 13.413 7.587Q14 8.175 14 9Q14 9.825 13.413 10.412Q12.825 11 12 11ZM7 22Q7 21.175 7.588 20.587Q8.175 20 9 20H11Q11 18.275 10.225 16.987Q9.45 15.7 8.15 14.85Q6.65 13.875 5.825 12.375Q5 10.875 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q14.925 2 16.962 4.037Q19 6.075 19 9Q19 10.875 18.125 12.4Q17.25 13.925 15.8 14.875Q14.525 15.675 13.762 16.975Q13 18.275 13 20H15Q15.825 20 16.413 20.587Q17 21.175 17 22ZM12 14Q14.075 14 15.538 12.537Q17 11.075 17 9Q17 6.925 15.538 5.463Q14.075 4 12 4Q9.925 4 8.463 5.463Q7 6.925 7 9Q7 11.075 8.463 12.537Q9.925 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialNestCamIndoorRounded.displayName = 'AmauiIconMaterialNestCamIndoorRounded';

export default IconMaterialNestCamIndoorRounded;
