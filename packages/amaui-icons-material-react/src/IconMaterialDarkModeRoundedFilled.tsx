import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeRoundedFilled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12 21Q8.225 21 5.612 18.387Q3 15.775 3 12Q3 8.55 5.25 6.012Q7.5 3.475 11 3.05Q11.625 2.975 11.975 3.5Q12.325 4.025 11.95 4.6Q11.525 5.25 11.312 5.975Q11.1 6.7 11.1 7.5Q11.1 9.75 12.675 11.325Q14.25 12.9 16.5 12.9Q17.275 12.9 18.038 12.675Q18.8 12.45 19.4 12.05Q19.925 11.7 20.475 12.012Q21.025 12.325 20.95 13Q20.6 16.45 18.013 18.725Q15.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDarkModeRoundedFilled.displayName = 'AmauiIconMaterialDarkModeRoundedFilled';

export default IconMaterialDarkModeRoundedFilled;
