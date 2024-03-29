import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneFilled'

      short_name='CloudDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Zm3.85-3.425q.2 0 .375-.063.175-.062.325-.212l4.225-4.225q.3-.3.3-.725t-.3-.725q-.3-.3-.725-.3t-.725.3l-3.5 3.5-1.4-1.4q-.275-.275-.7-.275-.425 0-.7.275-.3.3-.3.725t.3.7L9.65 16.3q.15.15.325.212.175.063.375.063Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneFilled.displayName = 'AmauiIconMaterialCloudDoneFilled';

export default IconMaterialCloudDoneFilled;
