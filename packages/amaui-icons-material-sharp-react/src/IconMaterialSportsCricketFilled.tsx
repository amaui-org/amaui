import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketFilled'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 17.7 1.625 7.825l4.2-4.2L15.7 13.5Zm7.1 4.3-4.25-4.25 1.4-1.4L20 20.6Zm-.1-13q-1.45 0-2.475-1.025Q15 6.95 15 5.5q0-1.45 1.025-2.475Q17.05 2 18.5 2q1.45 0 2.475 1.025Q22 4.05 22 5.5q0 1.45-1.025 2.475Q19.95 9 18.5 9Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketFilled.displayName = 'AmauiIconMaterialSportsCricketFilled';

export default IconMaterialSportsCricketFilled;
