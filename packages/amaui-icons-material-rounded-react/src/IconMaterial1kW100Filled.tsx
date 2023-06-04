import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kW100Filled'

      short_name='1k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 14.6q.15 0 .25-.1t.1-.25V12.2l2.375 2.325q.05.05.113.062.062.013.112.013.275 0 .35-.213.075-.212-.1-.387l-2.1-2.05L16.3 10q.175-.175.1-.388-.075-.212-.35-.212-.075 0-.137.025-.063.025-.113.075l-2.4 2.25V9.725q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v4.525q0 .125.1.225t.25.1Zm-3.8 0q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25t-.25-.1H7.725q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1H8.9v4.175q0 .125.1.225t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial1kW100Filled.displayName = 'AmauiIconMaterial1kW100Filled';

export default IconMaterial1kW100Filled;
