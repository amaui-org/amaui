import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppMaybeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeRoundedW100Filled'
      short_name='GppMaybe'

      {...props}
    >
      <path d="M12 12.55Q12.15 12.55 12.25 12.45Q12.35 12.35 12.35 12.2V8.35Q12.35 8.2 12.25 8.1Q12.15 8 12 8Q11.85 8 11.75 8.1Q11.65 8.2 11.65 8.35V12.2Q11.65 12.35 11.75 12.45Q11.85 12.55 12 12.55ZM12 15Q12.225 15 12.363 14.85Q12.5 14.7 12.5 14.5Q12.5 14.275 12.363 14.137Q12.225 14 12 14Q11.8 14 11.65 14.137Q11.5 14.275 11.5 14.5Q11.5 14.7 11.65 14.85Q11.8 15 12 15ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeRoundedW100Filled.displayName = 'AmauiIconMaterialGppMaybeRoundedW100Filled';

export default IconMaterialGppMaybeRoundedW100Filled;
