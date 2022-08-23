import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacRoundedW100'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M10.75 18.3Q10.25 18.3 10.062 17.837Q9.875 17.375 10.225 17.025L11.5 15.75H4.8Q4.175 15.75 3.737 15.312Q3.3 14.875 3.3 14.25V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V14.25Q20.7 14.875 20.263 15.312Q19.825 15.75 19.2 15.75H12.5L13.775 17.025Q14.125 17.375 13.938 17.837Q13.75 18.3 13.25 18.3ZM4 14H20V5.8Q20 5.45 19.775 5.225Q19.55 5 19.2 5H4.8Q4.45 5 4.225 5.225Q4 5.45 4 5.8ZM4 14V5.8Q4 5.45 4 5.225Q4 5 4 5Q4 5 4 5.225Q4 5.45 4 5.8V14Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacRoundedW100.displayName = 'AmauiIconMaterialDesktopMacRoundedW100';

export default IconMaterialDesktopMacRoundedW100;
