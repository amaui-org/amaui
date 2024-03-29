import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDone'

      short_name='CloudDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Zm3.85-3.425q.2 0 .375-.063.175-.062.325-.212l4.225-4.225q.3-.3.3-.725t-.3-.725q-.3-.3-.725-.3t-.725.3l-3.5 3.5-1.4-1.4q-.3-.3-.7-.3-.4 0-.7.3-.3.3-.3.713 0 .412.3.712L9.65 16.3q.15.15.325.212.175.063.375.063ZM6.5 18h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Zm5.5-6Z"/>
    </Icon>
  );
});

IconMaterialCloudDone.displayName = 'AmauiIconMaterialCloudDone';

export default IconMaterialCloudDone;
