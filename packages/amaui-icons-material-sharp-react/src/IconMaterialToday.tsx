import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToday = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Today'

      short_name='Today'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.5q-1.05 0-1.775-.725Q6.5 15.05 6.5 14q0-1.05.725-1.775Q7.95 11.5 9 11.5q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q10.05 16.5 9 16.5ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialToday.displayName = 'AmauiIconMaterialToday';

export default IconMaterialToday;
