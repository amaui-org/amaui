import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxW100'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.35q1.35-1.325 3.138-2.088Q9.925 15.5 12 15.5t3.863.762q1.787.763 3.137 2.088V5H5Zm7-5.25q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 7.4q-1.2 0-2.025.825T9.15 10.25q0 1.2.825 2.025T12 13.1Zm-7.7 6.6V4.3h15.4v15.4Zm1.25-.7h12.9v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.637-1.65.638-3.075 1.963ZM12 12.4q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512Q11.125 8.1 12 8.1t1.512.638q.638.637.638 1.512t-.638 1.512q-.637.638-1.512.638Zm0-2.15Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxW100.displayName = 'AmauiIconMaterialAccountBoxW100';

export default IconMaterialAccountBoxW100;
