import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiChannelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannelW100'

      short_name='WifiChannel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.125 20.35q-.175 0-.262-.112-.088-.113-.063-.263.8-5.175 1.938-8.25Q6.875 8.65 8 8.65q1.05 0 2.05 2.562 1 2.563 1.75 6.288.575-6.825 1.638-10.338Q14.5 3.65 16 3.65q1.65 0 2.775 4.25t1.525 12q.025.2-.1.325t-.325.125q-.15 0-.275-.1-.125-.1-.175-.25-.6-2.275-1.625-3.962-1.025-1.688-1.8-1.688-.775 0-1.787 1.65-1.013 1.65-1.613 3.925-.05.2-.212.313-.163.112-.363.112-.2 0-.337-.125-.138-.125-.188-.325-.875-5.55-1.95-8.05Q8.475 9.35 8 9.35q-.475 0-1.562 2.537-1.088 2.538-1.963 8.163-.025.125-.125.213-.1.087-.225.087Zm8.325-2.25q.75-1.975 1.675-3.213Q15.05 13.65 16 13.65t1.887 1.237q.938 1.238 1.663 3.213-.525-7.1-1.587-10.425Q16.9 4.35 16 4.35q-.875 0-1.938 3.325Q13 11 12.45 18.1Z"/>
    </Icon>
  );
});

IconMaterialWifiChannelW100.displayName = 'AmauiIconMaterialWifiChannelW100';

export default IconMaterialWifiChannelW100;
