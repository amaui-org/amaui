import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltRoundedW100'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M12.7 12.55V18Q12.7 18.3 12.5 18.5Q12.3 18.7 12 18.7Q11.7 18.7 11.5 18.5Q11.3 18.3 11.3 18V12.55L6.5 6.45Q6.15 6.025 6.288 5.662Q6.425 5.3 6.95 5.3H17.1Q17.525 5.3 17.7 5.65Q17.875 6 17.6 6.35ZM12 12.3 16.95 6H7.05ZM12 12.3Z"/>
    </Icon>
  );
});

IconMaterialFilterAltRoundedW100.displayName = 'AmauiIconMaterialFilterAltRoundedW100';

export default IconMaterialFilterAltRoundedW100;
