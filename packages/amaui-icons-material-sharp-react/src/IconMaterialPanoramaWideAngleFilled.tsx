import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaWideAngleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaWideAngleFilled'

      short_name='PanoramaWideAngle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-2.275 0-4.537-.212Q5.2 19.575 3 19q-.525-1.725-.763-3.463Q2 13.8 2 12q0-1.8.237-3.538Q2.475 6.725 3 5q1.975-.5 4.2-.75T12 4q2.575 0 4.8.25 2.225.25 4.2.75.525 1.725.763 3.462Q22 10.2 22 12q0 1.8-.25 3.537Q21.5 17.275 21 19q-2.2.575-4.462.788Q14.275 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaWideAngleFilled.displayName = 'AmauiIconMaterialPanoramaWideAngleFilled';

export default IconMaterialPanoramaWideAngleFilled;
