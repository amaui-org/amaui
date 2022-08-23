import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeSharpFilled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12 21Q8.25 21 5.625 18.375Q3 15.75 3 12Q3 8.25 5.625 5.625Q8.25 3 12 3Q12.35 3 12.688 3.025Q13.025 3.05 13.35 3.1Q12.325 3.825 11.713 4.987Q11.1 6.15 11.1 7.5Q11.1 9.75 12.675 11.325Q14.25 12.9 16.5 12.9Q17.875 12.9 19.025 12.287Q20.175 11.675 20.9 10.65Q20.95 10.975 20.975 11.312Q21 11.65 21 12Q21 15.75 18.375 18.375Q15.75 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDarkModeSharpFilled.displayName = 'AmauiIconMaterialDarkModeSharpFilled';

export default IconMaterialDarkModeSharpFilled;
