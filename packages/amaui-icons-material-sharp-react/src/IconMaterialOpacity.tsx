import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpacity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Opacity'

      short_name='Opacity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.325 0-5.662-2.3Q4 16.4 4 13.1q0-1.625.625-3.038Q5.25 8.65 6.35 7.55L12 2l5.65 5.55q1.1 1.1 1.725 2.512Q20 11.475 20 13.1q0 3.3-2.337 5.6Q15.325 21 12 21Zm-5.95-7H17.9q.3-1.8-.338-3.075Q16.925 9.65 16.25 9L12 4.8 7.75 9q-.675.65-1.325 1.925Q5.775 12.2 6.05 14Z"/>
    </Icon>
  );
});

IconMaterialOpacity.displayName = 'AmauiIconMaterialOpacity';

export default IconMaterialOpacity;
