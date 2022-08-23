import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDehazeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeRoundedW100'
      short_name='Dehaze'

      {...props}
    >
      <path d="M3 17.05Q2.85 17.05 2.75 16.95Q2.65 16.85 2.65 16.7Q2.65 16.55 2.75 16.45Q2.85 16.35 3 16.35H21Q21.15 16.35 21.25 16.45Q21.35 16.55 21.35 16.7Q21.35 16.85 21.25 16.95Q21.15 17.05 21 17.05ZM3 12.35Q2.85 12.35 2.75 12.25Q2.65 12.15 2.65 12Q2.65 11.85 2.75 11.75Q2.85 11.65 3 11.65H21Q21.15 11.65 21.25 11.75Q21.35 11.85 21.35 12Q21.35 12.15 21.25 12.25Q21.15 12.35 21 12.35ZM3 7.65Q2.85 7.65 2.75 7.55Q2.65 7.45 2.65 7.3Q2.65 7.15 2.75 7.05Q2.85 6.95 3 6.95H21Q21.15 6.95 21.25 7.05Q21.35 7.15 21.35 7.3Q21.35 7.45 21.25 7.55Q21.15 7.65 21 7.65Z"/>
    </Icon>
  );
});

IconMaterialDehazeRoundedW100.displayName = 'AmauiIconMaterialDehazeRoundedW100';

export default IconMaterialDehazeRoundedW100;
