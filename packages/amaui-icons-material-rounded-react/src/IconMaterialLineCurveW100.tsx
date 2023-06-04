import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineCurveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurveW100'

      short_name='LineCurve'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M734 896q-7 0-11-6t-4-14q0-110-43-206.5T559 501q-74-72-172.5-116T176 336q-6 0-11-4t-5-10q0-6 5-10t11-4q118 0 222 44.5T579.5 474Q657 551 702 654.5T747 876q0 8-3 14t-10 6Z"/>
    </Icon>
  );
});

IconMaterialLineCurveW100.displayName = 'AmauiIconMaterialLineCurveW100';

export default IconMaterialLineCurveW100;
