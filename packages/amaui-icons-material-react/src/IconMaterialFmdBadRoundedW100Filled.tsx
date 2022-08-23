import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFmdBadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadRoundedW100Filled'
      short_name='FmdBad'

      {...props}
    >
      <path d="M12 12.525Q12.15 12.525 12.25 12.425Q12.35 12.325 12.35 12.175V6.975Q12.35 6.825 12.25 6.725Q12.15 6.625 12 6.625Q11.85 6.625 11.75 6.725Q11.65 6.825 11.65 6.975V12.175Q11.65 12.325 11.75 12.425Q11.85 12.525 12 12.525ZM12 15.175Q12.225 15.175 12.363 15.025Q12.5 14.875 12.5 14.675Q12.5 14.45 12.363 14.312Q12.225 14.175 12 14.175Q11.8 14.175 11.65 14.312Q11.5 14.45 11.5 14.675Q11.5 14.875 11.65 15.025Q11.8 15.175 12 15.175ZM12 21.2Q11.85 21.2 11.725 21.163Q11.6 21.125 11.475 21.025Q8.025 17.825 6.338 15.087Q4.65 12.35 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.35 17.663 15.087Q15.975 17.825 12.525 21.025Q12.425 21.125 12.288 21.163Q12.15 21.2 12 21.2Z"/>
    </Icon>
  );
});

IconMaterialFmdBadRoundedW100Filled.displayName = 'AmauiIconMaterialFmdBadRoundedW100Filled';

export default IconMaterialFmdBadRoundedW100Filled;
