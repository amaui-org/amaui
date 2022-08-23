import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalLibraryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryRoundedFilled'
      short_name='LocalLibrary'

      {...props}
    >
      <path d="M10.85 21.525Q9.5 20.55 7.963 19.95Q6.425 19.35 4.75 19.125Q4 19.025 3.5 18.487Q3 17.95 3 17.25V10.2Q3 9.25 3.65 8.637Q4.3 8.025 5.175 8.175Q7.1 8.5 8.838 9.35Q10.575 10.2 12 11.55Q13.425 10.2 15.163 9.35Q16.9 8.5 18.825 8.175Q19.7 8.025 20.35 8.637Q21 9.25 21 10.2V17.25Q21 17.95 20.5 18.487Q20 19.025 19.25 19.125Q17.575 19.35 16.038 19.95Q14.5 20.55 13.15 21.525Q12.65 21.9 12 21.9Q11.35 21.9 10.85 21.525ZM12 9Q10.35 9 9.175 7.825Q8 6.65 8 5Q8 3.35 9.175 2.175Q10.35 1 12 1Q13.65 1 14.825 2.175Q16 3.35 16 5Q16 6.65 14.825 7.825Q13.65 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryRoundedFilled.displayName = 'AmauiIconMaterialLocalLibraryRoundedFilled';

export default IconMaterialLocalLibraryRoundedFilled;
