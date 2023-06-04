import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100Filled'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 8.65V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h13.4q.65 0 1.075.425.425.425.425 1.075v2.85ZM9.2 19.7V9.35h6.6V19.7Zm7.3 0V9.35h4.2v8.85q0 .65-.425 1.075-.425.425-1.075.425Zm-10.7 0q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V9.35h4.2V19.7Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100Filled.displayName = 'AmauiIconMaterialTableChartW100Filled';

export default IconMaterialTableChartW100Filled;
