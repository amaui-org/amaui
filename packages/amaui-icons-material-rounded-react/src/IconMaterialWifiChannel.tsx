import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiChannel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannel'

      short_name='WifiChannel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 21q-.45 0-.725-.312-.275-.313-.2-.738.725-5.275 1.975-8.613Q6.35 8 8 8q1.075 0 1.963 1.425.887 1.425 1.637 4.15.65-5.125 1.738-7.85Q14.425 3 16 3q2.1 0 3.338 4.762 1.237 4.763 1.612 12.163.05.425-.262.75-.313.325-.788.325-.375 0-.687-.25-.313-.25-.413-.625-.55-2.05-1.387-3.587Q16.575 15 16 15q-.575 0-1.4 1.5t-1.375 3.525q-.125.4-.462.687Q12.425 21 12 21t-.75-.275q-.325-.275-.375-.7-.5-3.65-1.325-6.4-.825-2.75-1.55-3.5-.725.75-1.55 3.512-.825 2.763-1.325 6.438-.05.375-.362.65Q4.45 21 4.05 21Zm9.45-6.5q.5-.65 1.125-1.075Q15.25 13 16 13q.725 0 1.363.425Q18 13.85 18.5 14.5q-.45-3.8-1.125-6.338Q16.7 5.625 16 5.05q-.7.575-1.387 3.212Q13.925 10.9 13.5 14.5Z"/>
    </Icon>
  );
});

IconMaterialWifiChannel.displayName = 'AmauiIconMaterialWifiChannel';

export default IconMaterialWifiChannel;
