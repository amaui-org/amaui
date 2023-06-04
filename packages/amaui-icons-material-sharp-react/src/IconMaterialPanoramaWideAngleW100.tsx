import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleW100'

      short_name='PanoramaWideAngle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-2.225 0-4.188-.213-1.962-.212-3.762-.637-.4-1.425-.575-2.887Q3.3 13.5 3.3 12t.175-2.963q.175-1.462.575-2.887 1.8-.425 3.762-.638Q9.775 5.3 12 5.3q2.225 0 4.188.212 1.962.213 3.762.638.4 1.425.575 2.887Q20.7 10.5 20.7 12t-.175 2.963q-.175 1.462-.575 2.887-1.8.425-3.762.637-1.963.213-4.188.213Zm0-6.7Zm0 6q2.075 0 3.9-.188 1.825-.187 3.5-.562.325-1.3.463-2.6Q20 13.35 20 12q0-1.35-.137-2.65-.138-1.3-.463-2.6-1.675-.375-3.5-.562Q14.075 6 12 6t-3.9.188q-1.825.187-3.5.562-.325 1.3-.462 2.6Q4 10.65 4 12q0 1.35.138 2.65.137 1.3.462 2.6 1.675.375 3.5.562Q9.925 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleW100.displayName = 'AmauiIconMaterialPanoramaWideAngleW100';

export default IconMaterialPanoramaWideAngleW100;
