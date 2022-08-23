import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFmdBadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadSharpW100Filled'
      short_name='FmdBad'

      {...props}
    >
      <path d="M12 19.325Q11.825 19.325 11.7 19.212Q11.575 19.1 11.45 18.9Q11.025 18.025 10.45 17.137Q9.875 16.25 8.9 14.975Q7.775 13.525 7.038 12.162Q6.3 10.8 6.3 9Q6.3 6.625 7.963 4.962Q9.625 3.3 12 3.3Q14.375 3.3 16.038 4.962Q17.7 6.625 17.7 9Q17.7 10.95 16.913 12.3Q16.125 13.65 15.1 14.975Q14.075 16.3 13.525 17.163Q12.975 18.025 12.55 18.9Q12.425 19.1 12.3 19.212Q12.175 19.325 12 19.325ZM12 13.625Q12.225 13.625 12.363 13.475Q12.5 13.325 12.5 13.125Q12.5 12.9 12.363 12.762Q12.225 12.625 12 12.625Q11.8 12.625 11.65 12.762Q11.5 12.9 11.5 13.125Q11.5 13.325 11.65 13.475Q11.8 13.625 12 13.625ZM11.65 11.175H12.35V6.625H11.65Z"/>
    </Icon>
  );
});

IconMaterialFmdBadSharpW100Filled.displayName = 'AmauiIconMaterialFmdBadSharpW100Filled';

export default IconMaterialFmdBadSharpW100Filled;
