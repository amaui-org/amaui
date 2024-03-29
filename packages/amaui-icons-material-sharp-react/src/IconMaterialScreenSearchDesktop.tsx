import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktop'

      short_name='ScreenSearchDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.45 15.05 1.1-1.05-2.1-2.1q.275-.425.413-.9.137-.475.137-1 0-1.475-1.037-2.488Q12.925 6.5 11.5 6.5T9.038 7.512Q8 8.525 8 10t1.038 2.488Q10.075 13.5 11.5 13.5q.525 0 .988-.137.462-.138.912-.413ZM11.5 12q-.825 0-1.412-.588Q9.5 10.825 9.5 10t.588-1.413Q10.675 8 11.5 8q.8 0 1.4.587.6.588.6 1.413 0 .825-.587 1.412Q12.325 12 11.5 12ZM2 18V3h20v15Zm2-2h16V5H4Zm-3 5v-2h22v2Zm3-5V5v11Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktop.displayName = 'AmauiIconMaterialScreenSearchDesktop';

export default IconMaterialScreenSearchDesktop;
