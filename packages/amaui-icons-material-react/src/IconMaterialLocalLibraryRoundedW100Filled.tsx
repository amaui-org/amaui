import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalLibraryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryRoundedW100Filled'
      short_name='LocalLibrary'

      {...props}
    >
      <path d="M11.425 20.275Q10 19.275 8.387 18.65Q6.775 18.025 5 17.775Q4.7 17.725 4.5 17.5Q4.3 17.275 4.3 17V9.55Q4.3 9.25 4.513 9.062Q4.725 8.875 5 8.925Q7.025 9.2 8.812 10.15Q10.6 11.1 12 12.3Q13.4 11.1 15.188 10.15Q16.975 9.2 19 8.925Q19.275 8.875 19.488 9.062Q19.7 9.25 19.7 9.55V17Q19.7 17.275 19.5 17.5Q19.3 17.725 19 17.775Q17.225 18.025 15.613 18.65Q14 19.275 12.575 20.275Q12.325 20.45 12 20.45Q11.675 20.45 11.425 20.275ZM12 8.45Q10.775 8.45 9.887 7.562Q9 6.675 9 5.45Q9 4.2 9.887 3.325Q10.775 2.45 12 2.45Q13.25 2.45 14.125 3.325Q15 4.2 15 5.45Q15 6.675 14.125 7.562Q13.25 8.45 12 8.45Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryRoundedW100Filled.displayName = 'AmauiIconMaterialLocalLibraryRoundedW100Filled';

export default IconMaterialLocalLibraryRoundedW100Filled;
