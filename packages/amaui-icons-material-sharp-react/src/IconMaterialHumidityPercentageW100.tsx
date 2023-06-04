import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityPercentageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageW100'

      short_name='HumidityPercentage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-4.55.175 5.575-5.575-.475-.5-5.6 5.6ZM10 12.85q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm2 7.85q-2.875 0-4.787-1.975Q5.3 16.75 5.3 13.8q0-2.05 1.663-4.563Q8.625 6.725 12 3.7q3.375 3.025 5.038 5.537Q18.7 11.75 18.7 13.8q0 2.95-1.912 4.925Q14.875 20.7 12 20.7Zm0-.7q2.6 0 4.3-1.762Q18 16.475 18 13.8q0-1.825-1.512-4.125Q14.975 7.375 12 4.65 9.025 7.375 7.513 9.675 6 11.975 6 13.8q0 2.675 1.7 4.438Q9.4 20 12 20Zm0-7.8Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageW100.displayName = 'AmauiIconMaterialHumidityPercentageW100';

export default IconMaterialHumidityPercentageW100;
