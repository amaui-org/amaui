import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGymnasticsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGymnasticsW100Filled'

      short_name='SportsGymnastics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 7.6q-.65 0-1.125-.475T4.65 6q0-.65.475-1.125T6.25 4.4q.65 0 1.125.475T7.85 6q0 .65-.475 1.125T6.25 7.6Zm6.375 13.75-.1-9.675L7.2 10.35H.9v-.7h6.3l7.875-5.525.45.525-4.875 3.475 3.925 1.125 7.075-4.425.4.475-7.85 5.925-.825 10.125Z"/>
    </Icon>
  );
});

IconMaterialSportsGymnasticsW100Filled.displayName = 'AmauiIconMaterialSportsGymnasticsW100Filled';

export default IconMaterialSportsGymnasticsW100Filled;
