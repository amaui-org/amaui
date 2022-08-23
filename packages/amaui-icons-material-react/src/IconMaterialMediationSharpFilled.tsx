import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationSharpFilled'
      short_name='Mediation'

      {...props}
    >
      <path d="M5 23Q3.75 23 2.875 22.125Q2 21.25 2 20Q2 18.75 2.875 17.875Q3.75 17 5 17Q5.675 17 6.3 17.312Q6.925 17.625 7.35 18.15Q8.825 17.35 9.75 16Q10.675 14.65 10.9 13H7.8Q7.5 13.9 6.725 14.45Q5.95 15 5 15Q3.75 15 2.875 14.125Q2 13.25 2 12Q2 10.75 2.875 9.875Q3.75 9 5 9Q5.95 9 6.725 9.55Q7.5 10.1 7.8 11H10.9Q10.675 9.35 9.75 8Q8.825 6.65 7.35 5.85Q6.925 6.375 6.3 6.688Q5.675 7 5 7Q3.75 7 2.875 6.125Q2 5.25 2 4Q2 2.75 2.875 1.875Q3.75 1 5 1Q6.25 1 7.1 1.85Q7.95 2.7 8 3.95Q10.025 5 11.35 6.85Q12.675 8.7 12.95 11H18.2L16.6 9.4L18 8L22 12L18 16L16.6 14.6L18.2 13H12.95Q12.675 15.3 11.375 17.162Q10.075 19.025 8 20.05Q7.95 21.3 7.1 22.15Q6.25 23 5 23Z"/>
    </Icon>
  );
});

IconMaterialMediationSharpFilled.displayName = 'AmauiIconMaterialMediationSharpFilled';

export default IconMaterialMediationSharpFilled;
