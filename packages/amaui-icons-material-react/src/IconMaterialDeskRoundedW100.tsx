import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskRoundedW100'
      short_name='Desk'

      {...props}
    >
      <path d="M3.4 17V8.15Q3.4 7.825 3.613 7.612Q3.825 7.4 4.15 7.4H19.85Q20.175 7.4 20.388 7.612Q20.6 7.825 20.6 8.15V17Q20.6 17.15 20.5 17.25Q20.4 17.35 20.25 17.35Q20.175 17.35 20.113 17.325Q20.05 17.3 20 17.25Q19.95 17.2 19.925 17.137Q19.9 17.075 19.9 17V15.35H14.975V17Q14.975 17.075 14.95 17.137Q14.925 17.2 14.875 17.25Q14.825 17.3 14.763 17.325Q14.7 17.35 14.625 17.35Q14.475 17.35 14.375 17.25Q14.275 17.15 14.275 17V8.1H4.1V17Q4.1 17.15 4 17.25Q3.9 17.35 3.75 17.35Q3.6 17.35 3.5 17.25Q3.4 17.15 3.4 17ZM14.975 10.65H19.9V8.1H14.975ZM14.975 14.65H19.9V11.35H14.975Z"/>
    </Icon>
  );
});

IconMaterialDeskRoundedW100.displayName = 'AmauiIconMaterialDeskRoundedW100';

export default IconMaterialDeskRoundedW100;
