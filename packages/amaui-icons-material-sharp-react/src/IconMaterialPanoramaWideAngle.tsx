import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngle'

      short_name='PanoramaWideAngle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-2.275 0-4.537-.212Q5.2 19.575 3 19q-.525-1.725-.763-3.463Q2 13.8 2 12q0-1.8.237-3.538Q2.475 6.725 3 5q1.975-.5 4.2-.75T12 4q2.575 0 4.8.25 2.225.25 4.2.75.525 1.725.763 3.462Q22 10.2 22 12q0 1.8-.25 3.537Q21.5 17.275 21 19q-2.2.575-4.462.788Q14.275 20 12 20Zm0-8Zm0 6q1.875 0 3.725-.163 1.85-.162 3.675-.587.325-1.3.463-2.6Q20 13.35 20 12q0-1.35-.137-2.65-.138-1.3-.463-2.6-1.625-.375-3.437-.562Q14.15 6 12 6q-2.125 0-3.938.188-1.812.187-3.462.562-.325 1.3-.462 2.6Q4 10.65 4 12q0 1.35.138 2.65.137 1.3.462 2.6 1.825.425 3.675.587Q10.125 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngle.displayName = 'AmauiIconMaterialPanoramaWideAngle';

export default IconMaterialPanoramaWideAngle;
