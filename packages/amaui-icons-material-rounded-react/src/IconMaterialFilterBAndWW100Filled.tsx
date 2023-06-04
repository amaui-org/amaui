import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterBAndWW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWW100Filled'

      short_name='FilterBAndW'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.2 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm-12.95-.95q.075.075.213.163Q5.6 19 5.8 19H12v-8l6.75 7.75q.075-.075.163-.212Q19 18.4 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H12v6Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWW100Filled.displayName = 'AmauiIconMaterialFilterBAndWW100Filled';

export default IconMaterialFilterBAndWW100Filled;
