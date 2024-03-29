import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationCityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityFilled'

      short_name='LocationCity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V9q0-.825.587-1.413Q4.175 7 5 7h4V5.825q0-.2.038-.387.037-.188.112-.363.075-.175.175-.338.1-.162.25-.312L11.3 2.7q.3-.3.7-.3.4 0 .7.3l1.725 1.725q.275.275.425.637.15.363.15.763V11h4q.825 0 1.413.587Q21 12.175 21 13v6q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h2v-2H5Zm0-4h2v-2H5Zm0-4h2V9H5Zm6 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V9h-2Zm0-4h2V5h-2Zm6 12h2v-2h-2Zm0-4h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialLocationCityFilled.displayName = 'AmauiIconMaterialLocationCityFilled';

export default IconMaterialLocationCityFilled;
