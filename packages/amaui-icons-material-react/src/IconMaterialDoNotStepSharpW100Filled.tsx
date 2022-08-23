import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotStepSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepSharpW100Filled'
      short_name='DoNotStep'

      {...props}
    >
      <path d="M17.8 14.95 17.3 14.45 20.775 10.975 21.275 11.475ZM16.225 13.4 10.975 8.15 14.45 4.675 19.7 9.925ZM21.3 22.3 14.325 15.325 11.225 18.425H3.275V15.8Q4.2 15.375 5.075 14.938Q5.95 14.5 6.75 13.875L7.8 14.925L8.575 14.15L7.55 13.125Q7.675 13 7.788 12.887Q7.9 12.775 8.05 12.65L9.075 13.675L9.725 13.025L8.625 11.925Q8.75 11.8 8.85 11.65Q8.95 11.5 9.025 11.325L10.225 12.525L10.875 11.875L2.25 3.25L2.75 2.75L21.8 21.8Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepSharpW100Filled.displayName = 'AmauiIconMaterialDoNotStepSharpW100Filled';

export default IconMaterialDoNotStepSharpW100Filled;
