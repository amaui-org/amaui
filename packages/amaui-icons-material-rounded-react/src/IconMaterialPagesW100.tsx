import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesW100'

      short_name='Pages'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.85q.125 0 .225-.05t.15-.175l.7-1.55 1.55-.7q.125-.05.175-.15.05-.1.05-.225t-.05-.225q-.05-.1-.175-.15l-1.55-.7-.7-1.55q-.05-.125-.15-.175-.1-.05-.225-.05t-.225.05q-.1.05-.15.175l-.7 1.55-1.55.7q-.125.05-.175.15-.05.1-.05.225t.05.225q.05.1.175.15l1.55.7.7 1.55q.05.125.15.175.1.05.225.05ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialPagesW100.displayName = 'AmauiIconMaterialPagesW100';

export default IconMaterialPagesW100;
