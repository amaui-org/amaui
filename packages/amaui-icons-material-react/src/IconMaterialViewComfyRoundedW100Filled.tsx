import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewComfyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyRoundedW100Filled'
      short_name='ViewComfy'

      {...props}
    >
      <path d="M7.9 9.3V5.35H11.65V9.3ZM12.35 9.3V5.35H16.1V9.3ZM16.8 9.3V5.35H20.75V9.3ZM3.25 9.3V5.35H7.2V9.3ZM12.35 14V10H16.1V14ZM16.8 14V10H20.75V14ZM3.25 14V10H7.2V14ZM12.35 18.65V14.7H16.1V18.65ZM7.9 18.65V14.7H11.65V18.65ZM16.8 18.65V14.7H20.75V18.65ZM3.25 18.65V14.7H7.2V18.65ZM7.9 14V10H11.65V14Z"/>
    </Icon>
  );
});

IconMaterialViewComfyRoundedW100Filled.displayName = 'AmauiIconMaterialViewComfyRoundedW100Filled';

export default IconMaterialViewComfyRoundedW100Filled;
