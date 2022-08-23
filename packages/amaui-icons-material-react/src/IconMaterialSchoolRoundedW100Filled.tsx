import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolRoundedW100Filled'
      short_name='School'

      {...props}
    >
      <path d="M19.95 14.9Q19.8 14.9 19.7 14.8Q19.6 14.7 19.6 14.55V9.4L12.725 13.125Q12.55 13.225 12.375 13.262Q12.2 13.3 12 13.3Q11.8 13.3 11.625 13.262Q11.45 13.225 11.275 13.125L4.925 9.65Q4.725 9.55 4.638 9.375Q4.55 9.2 4.525 9Q4.525 8.8 4.625 8.625Q4.725 8.45 4.925 8.35L11.275 4.9Q11.45 4.8 11.625 4.75Q11.8 4.7 12 4.7Q12.2 4.7 12.375 4.75Q12.55 4.8 12.725 4.9L19.9 8.775Q20.1 8.9 20.2 9.075Q20.3 9.25 20.3 9.45V14.55Q20.3 14.7 20.2 14.8Q20.1 14.9 19.95 14.9ZM12 17.8Q11.8 17.8 11.625 17.75Q11.45 17.7 11.275 17.6L7.075 15.325Q6.725 15.125 6.513 14.775Q6.3 14.425 6.3 14V11.1L10.975 13.65Q11.225 13.775 11.475 13.862Q11.725 13.95 12 13.95Q12.275 13.95 12.525 13.862Q12.775 13.775 13.025 13.65L17.7 11.1V14Q17.7 14.425 17.488 14.775Q17.275 15.125 16.925 15.325L12.725 17.6Q12.55 17.7 12.375 17.75Q12.2 17.8 12 17.8Z"/>
    </Icon>
  );
});

IconMaterialSchoolRoundedW100Filled.displayName = 'AmauiIconMaterialSchoolRoundedW100Filled';

export default IconMaterialSchoolRoundedW100Filled;
