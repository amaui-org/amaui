import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismSharpFilled'
      short_name='VolunteerActivism'

      {...props}
    >
      <path d="M16 13Q13.65 10.875 11.825 8.938Q10 7 10 5.3Q10 3.9 10.95 2.95Q11.9 2 13.3 2Q14.1 2 14.8 2.337Q15.5 2.675 16 3.25Q16.5 2.675 17.2 2.337Q17.9 2 18.7 2Q20.1 2 21.05 2.95Q22 3.9 22 5.3Q22 7 20.175 8.938Q18.35 10.875 16 13ZM1 22V11H5V22ZM14 22 7 20.025V11H8.975L17 14V16H13L11.25 15.325L10.9 16.25L13 17H22V19Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismSharpFilled.displayName = 'AmauiIconMaterialVolunteerActivismSharpFilled';

export default IconMaterialVolunteerActivismSharpFilled;
