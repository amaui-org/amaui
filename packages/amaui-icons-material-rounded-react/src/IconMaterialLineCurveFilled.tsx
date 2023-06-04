import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineCurveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurveFilled'

      short_name='LineCurve'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 896q-17 0-28.5-13T718 852q-8-103-50.5-193t-111-158.5Q488 432 398 389t-192-51q-18-2-32-13.5T160 296q0-17 12.5-28.5T202 257q120 8 225.5 57.5T613 444q80 80 129.5 186T799 856q1 17-10.5 28.5T760 896Z"/>
    </Icon>
  );
});

IconMaterialLineCurveFilled.displayName = 'AmauiIconMaterialLineCurveFilled';

export default IconMaterialLineCurveFilled;
