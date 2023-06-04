import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCcwW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcwW100'

      short_name='Rotate90DegreesCcw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.725 20.7q-1.025 0-2-.275-.975-.275-1.85-.775l.5-.5q.775.425 1.625.638.85.212 1.725.212 2.925 0 4.963-2.038 2.037-2.037 2.037-4.962t-2.037-4.963Q15.65 6 12.725 6h-1.65l2.15 2.15-.5.6-3.1-3.1 3.1-3.1.5.6-2.15 2.15h1.65q3.2 0 5.45 2.25t2.25 5.45q0 1.6-.6 3t-1.65 2.45q-1.05 1.05-2.45 1.65-1.4.6-3 .6Zm-6-3.55L2.575 13l4.15-4.15 4.15 4.15Zm0-1L9.875 13l-3.15-3.15L3.575 13Zm0-3.15Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcwW100.displayName = 'AmauiIconMaterialRotate90DegreesCcwW100';

export default IconMaterialRotate90DegreesCcwW100;
