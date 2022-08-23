import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuRoundedW100'
      short_name='Menu'

      {...props}
    >
      <path d="M4 17.05Q3.85 17.05 3.75 16.95Q3.65 16.85 3.65 16.7Q3.65 16.55 3.75 16.45Q3.85 16.35 4 16.35H20Q20.15 16.35 20.25 16.45Q20.35 16.55 20.35 16.7Q20.35 16.85 20.25 16.95Q20.15 17.05 20 17.05ZM4 12.35Q3.85 12.35 3.75 12.25Q3.65 12.15 3.65 12Q3.65 11.85 3.75 11.75Q3.85 11.65 4 11.65H20Q20.15 11.65 20.25 11.75Q20.35 11.85 20.35 12Q20.35 12.15 20.25 12.25Q20.15 12.35 20 12.35ZM4 7.65Q3.85 7.65 3.75 7.55Q3.65 7.45 3.65 7.3Q3.65 7.15 3.75 7.05Q3.85 6.95 4 6.95H20Q20.15 6.95 20.25 7.05Q20.35 7.15 20.35 7.3Q20.35 7.45 20.25 7.55Q20.15 7.65 20 7.65Z"/>
    </Icon>
  );
});

IconMaterialMenuRoundedW100.displayName = 'AmauiIconMaterialMenuRoundedW100';

export default IconMaterialMenuRoundedW100;
