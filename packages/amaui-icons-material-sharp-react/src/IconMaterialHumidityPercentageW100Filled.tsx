import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityPercentageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageW100Filled'

      short_name='HumidityPercentage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-4.55.175 5.575-5.575-.475-.5-5.6 5.6ZM10 12.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm2 7.85q-2.875 0-4.787-1.975Q5.3 16.75 5.3 13.8q0-2.05 1.663-4.563Q8.625 6.725 12 3.7q3.375 3.025 5.038 5.537Q18.7 11.75 18.7 13.8q0 2.95-1.912 4.925Q14.875 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageW100Filled.displayName = 'AmauiIconMaterialHumidityPercentageW100Filled';

export default IconMaterialHumidityPercentageW100Filled;
