import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueryStatsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsW100Filled'

      short_name='QueryStats'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.45 17.25-.575-.425 4.2-6.725 3 3.5 3.95-6.4 1.85 2.8q-.2.05-.362.087-.163.038-.338.088L13.05 8.5 9.2 14.775 6.175 11.25Zm19.125 4.825L18.05 18.6q-.425.325-.925.5t-1.05.175q-1.35 0-2.275-.925-.925-.925-.925-2.275 0-1.35.925-2.275.925-.925 2.275-.925 1.35 0 2.275.925.925.925.925 2.275 0 .575-.187 1.088-.188.512-.538.937l3.525 3.475Zm-5.5-3.5q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775-.725-.725-1.775-.725-1.05 0-1.775.725-.725.725-.725 1.775 0 1.05.725 1.775.725.725 1.775.725Zm1.725-8.45q-.175-.05-.338-.088-.162-.037-.337-.062l4.425-7.05.575.425Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsW100Filled.displayName = 'AmauiIconMaterialQueryStatsW100Filled';

export default IconMaterialQueryStatsW100Filled;
