import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffW100'

      short_name='DirectionsAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.325-5.325L12 20.95 3.05 12l3.975-3.975L2.25 3.25l.5-.5L21.8 21.8Zm-5.8-5.8-1.95-1.95L12 16.1l-.5-.5 1.55-1.55-1.7-1.7H7.9v-.7h2.75L7.5 8.5 4 12l8 8Zm2.375-1.425L17.4 14.6 20 12l-8-8-2.6 2.6-.475-.475L12 3.05 20.95 12Zm-2.55-2.55.5-.5-4.1-4.1-.5.5Zm-2.05-2.05ZM11.5 12.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffW100.displayName = 'AmauiIconMaterialDirectionsAltOffW100';

export default IconMaterialDirectionsAltOffW100;
