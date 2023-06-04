import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Event'

      short_name='Event'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 18q-1.05 0-1.775-.725Q12 16.55 12 15.5q0-1.05.725-1.775Q13.45 13 14.5 13q1.05 0 1.775.725Q17 14.45 17 15.5q0 1.05-.725 1.775Q15.55 18 14.5 18ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialEvent.displayName = 'AmauiIconMaterialEvent';

export default IconMaterialEvent;
