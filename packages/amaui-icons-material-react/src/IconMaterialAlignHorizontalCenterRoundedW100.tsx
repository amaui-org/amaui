import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterRoundedW100'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <path d="M12 20.7Q11.85 20.7 11.75 20.6Q11.65 20.5 11.65 20.35V16.1H8.175Q7.825 16.1 7.562 15.838Q7.3 15.575 7.3 15.225Q7.3 14.875 7.562 14.613Q7.825 14.35 8.175 14.35H11.65V9.65H5.175Q4.825 9.65 4.562 9.387Q4.3 9.125 4.3 8.775Q4.3 8.425 4.562 8.162Q4.825 7.9 5.175 7.9H11.65V3.65Q11.65 3.5 11.75 3.4Q11.85 3.3 12 3.3Q12.15 3.3 12.25 3.4Q12.35 3.5 12.35 3.65V7.9H18.825Q19.175 7.9 19.438 8.162Q19.7 8.425 19.7 8.775Q19.7 9.125 19.438 9.387Q19.175 9.65 18.825 9.65H12.35V14.35H15.825Q16.175 14.35 16.438 14.613Q16.7 14.875 16.7 15.225Q16.7 15.575 16.438 15.838Q16.175 16.1 15.825 16.1H12.35V20.35Q12.35 20.5 12.25 20.6Q12.15 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterRoundedW100.displayName = 'AmauiIconMaterialAlignHorizontalCenterRoundedW100';

export default IconMaterialAlignHorizontalCenterRoundedW100;
