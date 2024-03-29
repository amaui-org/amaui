import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUpload'

      short_name='CloudUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20H13q-.825 0-1.412-.587Q11 18.825 11 18v-5.2l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.9-.9V18h5.5q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18H8q.425 0 .713.288Q9 18.575 9 19t-.287.712Q8.425 20 8 20Zm5.5-7Z"/>
    </Icon>
  );
});

IconMaterialCloudUpload.displayName = 'AmauiIconMaterialCloudUpload';

export default IconMaterialCloudUpload;
