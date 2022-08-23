import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHowToRegSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToRegSharpFilled'
      short_name='HowToReg'

      {...props}
    >
      <path d="M10 12Q8.35 12 7.175 10.825Q6 9.65 6 8Q6 6.35 7.175 5.175Q8.35 4 10 4Q11.65 4 12.825 5.175Q14 6.35 14 8Q14 9.65 12.825 10.825Q11.65 12 10 12ZM15.55 20.4 12.1 16.95 13.5 15.55 15.55 17.6 20.6 12.55 22 13.95ZM2 20V17.2Q2 16.375 2.425 15.65Q2.85 14.925 3.6 14.55Q4.875 13.9 6.475 13.45Q8.075 13 10 13Q10.75 13 11.463 13.075Q12.175 13.15 12.85 13.3L9.2 16.95L12.25 20Z"/>
    </Icon>
  );
});

IconMaterialHowToRegSharpFilled.displayName = 'AmauiIconMaterialHowToRegSharpFilled';

export default IconMaterialHowToRegSharpFilled;
