import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleW100Filled'

      short_name='PanoramaWideAngle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-2.225 0-4.188-.213-1.962-.212-3.762-.637-.4-1.425-.575-2.887Q3.3 13.5 3.3 12t.175-2.963q.175-1.462.575-2.887 1.8-.425 3.762-.638Q9.775 5.3 12 5.3q2.225 0 4.188.212 1.962.213 3.762.638.4 1.425.575 2.887Q20.7 10.5 20.7 12t-.175 2.963q-.175 1.462-.575 2.887-1.8.425-3.762.637-1.963.213-4.188.213Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleW100Filled.displayName = 'AmauiIconMaterialPanoramaWideAngleW100Filled';

export default IconMaterialPanoramaWideAngleW100Filled;
