import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsVolleyballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsVolleyballFilled'

      short_name='SportsVolleyball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.6 9.2 13 4.225V2.05q3.075.3 5.4 2.262 2.325 1.963 3.2 4.888ZM6.75 13.9V3.5q.975-.575 2.05-.95 1.075-.375 2.225-.5v9.375ZM2.9 16.125q-.45-.95-.675-1.988Q2 13.1 2 12q0-1.925.7-3.688.7-1.762 2.05-3.162v9.875ZM7.3 20.8q-1.05-.5-1.9-1.25-.85-.75-1.5-1.7l8.125-4.7 4.275 2.475Zm4.725 1.2q-.575 0-1.175-.062-.6-.063-1.15-.213l8.6-4.95 1.85 1.025q-1.425 1.95-3.562 3.075Q14.45 22 12.025 22Zm9.1-5.9L13 11.425V6.5l9 5.225q0 1.15-.2 2.25t-.675 2.125Z"/>
    </Icon>
  );
});

IconMaterialSportsVolleyballFilled.displayName = 'AmauiIconMaterialSportsVolleyballFilled';

export default IconMaterialSportsVolleyballFilled;
