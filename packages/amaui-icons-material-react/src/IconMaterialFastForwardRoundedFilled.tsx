import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastForwardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardRoundedFilled'
      short_name='FastForward'

      {...props}
    >
      <path d="M4.05 16.975Q3.55 17.325 3.025 17.025Q2.5 16.725 2.5 16.125V7.875Q2.5 7.275 3.025 6.987Q3.55 6.7 4.05 7.025L10.25 11.175Q10.7 11.475 10.7 12Q10.7 12.525 10.25 12.825ZM14.05 16.975Q13.55 17.325 13.025 17.025Q12.5 16.725 12.5 16.125V7.875Q12.5 7.275 13.025 6.987Q13.55 6.7 14.05 7.025L20.25 11.175Q20.7 11.475 20.7 12Q20.7 12.525 20.25 12.825Z"/>
    </Icon>
  );
});

IconMaterialFastForwardRoundedFilled.displayName = 'AmauiIconMaterialFastForwardRoundedFilled';

export default IconMaterialFastForwardRoundedFilled;
