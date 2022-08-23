import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffSharpW100Filled'
      short_name='ToggleOff'

      {...props}
    >
      <path d="M7 16.7Q5.05 16.7 3.675 15.325Q2.3 13.95 2.3 12Q2.3 10.05 3.675 8.675Q5.05 7.3 7 7.3H17Q18.95 7.3 20.325 8.675Q21.7 10.05 21.7 12Q21.7 13.95 20.325 15.325Q18.95 16.7 17 16.7ZM7 14.35Q7.975 14.35 8.662 13.662Q9.35 12.975 9.35 12Q9.35 11.025 8.662 10.337Q7.975 9.65 7 9.65Q6.025 9.65 5.338 10.337Q4.65 11.025 4.65 12Q4.65 12.975 5.338 13.662Q6.025 14.35 7 14.35Z"/>
    </Icon>
  );
});

IconMaterialToggleOffSharpW100Filled.displayName = 'AmauiIconMaterialToggleOffSharpW100Filled';

export default IconMaterialToggleOffSharpW100Filled;
