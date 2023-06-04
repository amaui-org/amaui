import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartViewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartViewFilled'

      short_name='TableChartView'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M268 948q-11-11-11-28t11-28l191-192q23-23 57-23t57 23l83 83 179-179q12-12 28-12t28 12q12 12 12 28.5T891 661L713 840q-23 23-56.5 23T600 840l-84-84-192 192q-11 11-27.5 11.5T268 948Zm-108-12q-33 0-56.5-23.5T80 856V296q0-33 23.5-56.5T160 216h560q33 0 56.5 23.5T800 296v160q0 17-11.5 28.5T760 496H160v440Z"/>
    </Icon>
  );
});

IconMaterialTableChartViewFilled.displayName = 'AmauiIconMaterialTableChartViewFilled';

export default IconMaterialTableChartViewFilled;
