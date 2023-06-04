import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayW100'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 19.7 12 16.25l3.45 3.45Zm-5.25-2V4.3h17.4v13.4H16V17h4V5H4v12h4v.7ZM12 11Z"/>
    </Icon>
  );
});

IconMaterialAirplayW100.displayName = 'AmauiIconMaterialAirplayW100';

export default IconMaterialAirplayW100;
