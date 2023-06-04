import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100'

      short_name='DonutSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.875 3.35q3.125.3 5.313 2.462 2.187 2.163 2.487 5.288h-6.2q-.225-.55-.637-.95-.413-.4-.963-.6Zm.7.8v4.9q.425.25.775.587.35.338.575.763h4.95q-.5-2.375-2.212-4.088Q15.95 4.6 13.575 4.15Zm-2.4-.8v6.2q-.8.275-1.275.95-.475.675-.475 1.5t.488 1.475q.487.65 1.262.925v6.25q-3.35-.35-5.6-2.813-2.25-2.462-2.25-5.837 0-3.375 2.25-5.863 2.25-2.487 5.6-2.787Zm-.7.8Q7.65 4.675 5.838 6.9 4.025 9.125 4.025 12q0 2.875 1.813 5.1 1.812 2.225 4.637 2.75v-5q-.75-.5-1.25-1.237-.5-.738-.5-1.638 0-.875.488-1.625.487-.75 1.262-1.25Zm4 8.7h6.2q-.3 3.125-2.487 5.313Q16 20.35 12.875 20.65V14.4q.575-.2.975-.6.4-.4.625-.95Zm.45.7q-.275.4-.6.737-.325.338-.75.563v5q2.4-.475 4.1-2.187 1.7-1.713 2.2-4.113ZM8.725 12Zm6.2-1.6Zm0 3.15Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100.displayName = 'AmauiIconMaterialDonutSmallW100';

export default IconMaterialDonutSmallW100;
