import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalActivityRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityRoundedW100Filled'
      short_name='LocalActivity'

      {...props}
    >
      <path d="M4 18.7Q3.7 18.7 3.5 18.5Q3.3 18.3 3.3 18V15.05Q4.2 14.625 4.75 13.8Q5.3 12.975 5.3 12Q5.3 11.025 4.75 10.2Q4.2 9.375 3.3 8.95V6Q3.3 5.7 3.5 5.5Q3.7 5.3 4 5.3H20Q20.3 5.3 20.5 5.5Q20.7 5.7 20.7 6V8.95Q19.8 9.375 19.25 10.2Q18.7 11.025 18.7 12Q18.7 12.975 19.25 13.8Q19.8 14.625 20.7 15.05V18Q20.7 18.3 20.5 18.5Q20.3 18.7 20 18.7ZM12 13.25 12.8 13.875Q13.025 14.05 13.262 13.875Q13.5 13.7 13.425 13.425L13.1 12.4L14.125 11.625Q14.35 11.45 14.263 11.175Q14.175 10.9 13.875 10.9H12.75L12.375 9.775Q12.275 9.5 12 9.5Q11.725 9.5 11.625 9.775L11.25 10.9H10.1Q9.825 10.9 9.725 11.162Q9.625 11.425 9.85 11.625L10.85 12.4L10.525 13.475Q10.425 13.775 10.675 13.95Q10.925 14.125 11.15 13.925Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityRoundedW100Filled.displayName = 'AmauiIconMaterialLocalActivityRoundedW100Filled';

export default IconMaterialLocalActivityRoundedW100Filled;
