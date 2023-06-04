import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesW100Filled'

      short_name='Pages'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.85q.125 0 .225-.05t.15-.175l.7-1.55 1.55-.7q.125-.05.175-.15.05-.1.05-.225t-.05-.225q-.05-.1-.175-.15l-1.55-.7-.7-1.55q-.05-.125-.15-.175-.1-.05-.225-.05t-.225.05q-.1.05-.15.175l-.7 1.55-1.55.7q-.125.05-.175.15-.05.1-.05.225t.05.225q.05.1.175.15l1.55.7.7 1.55q.05.125.15.175.1.05.225.05ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPagesW100Filled.displayName = 'AmauiIconMaterialPagesW100Filled';

export default IconMaterialPagesW100Filled;
