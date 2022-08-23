import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewComfyRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyRoundedW100'
      short_name='ViewComfy'

      {...props}
    >
      <path d="M3.25 18.65V5.35H20.75V18.65ZM3.95 9.55H7.45V6.05H3.95ZM8.15 9.55H11.65V6.05H8.15ZM12.35 9.55H15.85V6.05H12.35ZM16.55 9.55H20.05V6.05H16.55ZM16.55 13.75H20.05V10.25H16.55ZM12.35 13.75H15.85V10.25H12.35ZM8.15 13.75H11.65V10.25H8.15ZM7.45 10.25H3.95V13.75H7.45ZM16.55 17.95H20.05V14.45H16.55ZM12.35 17.95H15.85V14.45H12.35ZM8.15 17.95H11.65V14.45H8.15ZM3.95 17.95H7.45V14.45H3.95Z"/>
    </Icon>
  );
});

IconMaterialViewComfyRoundedW100.displayName = 'AmauiIconMaterialViewComfyRoundedW100';

export default IconMaterialViewComfyRoundedW100;
