import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotStepSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepSharpFilled'
      short_name='DoNotStep'

      {...props}
    >
      <path d="M18.5 15.675 17.1 14.275 21.575 9.8 23 11.2ZM16.4 13.55 9.3 6.475 13.8 2 20.875 9.075ZM19.775 22.6 13.825 16.675 10.5 20H1V16.05Q1.85 15.7 2.675 15.337Q3.5 14.975 4.3 14.475L6.025 16.2L6.725 15.5L5.075 13.85Q5.275 13.65 5.463 13.462Q5.65 13.275 5.85 13.05L7.5 14.7L8.2 14L6.425 12.225Q6.575 11.95 6.688 11.675Q6.8 11.4 6.875 11.1L8.975 13.2L9.675 12.5L1.4 4.225L2.8 2.8L21.175 21.2Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepSharpFilled.displayName = 'AmauiIconMaterialDoNotStepSharpFilled';

export default IconMaterialDoNotStepSharpFilled;
