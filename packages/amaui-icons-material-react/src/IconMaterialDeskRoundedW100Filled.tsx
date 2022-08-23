import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskRoundedW100Filled'
      short_name='Desk'

      {...props}
    >
      <path d="M2.65 17V8.15Q2.65 7.825 2.863 7.612Q3.075 7.4 3.4 7.4H19.1Q19.425 7.4 19.638 7.612Q19.85 7.825 19.85 8.15V17Q19.85 17.15 19.75 17.25Q19.65 17.35 19.5 17.35Q19.425 17.35 19.363 17.325Q19.3 17.3 19.25 17.25Q19.2 17.2 19.175 17.137Q19.15 17.075 19.15 17V15.35H14.225V17Q14.225 17.075 14.2 17.137Q14.175 17.2 14.125 17.25Q14.075 17.3 14.013 17.325Q13.95 17.35 13.875 17.35Q13.725 17.35 13.625 17.25Q13.525 17.15 13.525 17V8.1H3.35V17Q3.35 17.15 3.25 17.25Q3.15 17.35 3 17.35Q2.85 17.35 2.75 17.25Q2.65 17.15 2.65 17ZM14.225 10.65H19.15V8.1H14.225ZM14.225 14.65H19.15V11.35H14.225Z"/>
    </Icon>
  );
});

IconMaterialDeskRoundedW100Filled.displayName = 'AmauiIconMaterialDeskRoundedW100Filled';

export default IconMaterialDeskRoundedW100Filled;
