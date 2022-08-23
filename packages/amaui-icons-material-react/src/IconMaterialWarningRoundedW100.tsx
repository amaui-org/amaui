import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningRoundedW100'
      short_name='Warning'

      {...props}
    >
      <path d="M12 12.5ZM4.55 19.7Q4.125 19.7 3.9 19.325Q3.675 18.95 3.9 18.575L11.35 5.725Q11.575 5.35 12 5.35Q12.425 5.35 12.65 5.725L20.1 18.575Q20.325 18.95 20.1 19.325Q19.875 19.7 19.45 19.7ZM12 10.5Q11.85 10.5 11.75 10.6Q11.65 10.7 11.65 10.85V15.15Q11.65 15.3 11.75 15.4Q11.85 15.5 12 15.5Q12.15 15.5 12.25 15.4Q12.35 15.3 12.35 15.15V10.85Q12.35 10.7 12.25 10.6Q12.15 10.5 12 10.5ZM12 17.5Q12.225 17.5 12.363 17.35Q12.5 17.2 12.5 17Q12.5 16.775 12.363 16.637Q12.225 16.5 12 16.5Q11.8 16.5 11.65 16.637Q11.5 16.775 11.5 17Q11.5 17.2 11.65 17.35Q11.8 17.5 12 17.5ZM4.45 19H19.55L12 6Z"/>
    </Icon>
  );
});

IconMaterialWarningRoundedW100.displayName = 'AmauiIconMaterialWarningRoundedW100';

export default IconMaterialWarningRoundedW100;
