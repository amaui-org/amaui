import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltFilled'

      short_name='DirectionsAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.8 1.2 12 12 1.2 22.8 12Zm0-5.8 5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltFilled.displayName = 'AmauiIconMaterialDirectionsAltFilled';

export default IconMaterialDirectionsAltFilled;
