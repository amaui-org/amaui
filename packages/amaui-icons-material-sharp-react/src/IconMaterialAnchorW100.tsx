import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnchorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorW100'

      short_name='Anchor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.85q-1.675 0-3.112-.487-1.438-.488-2.488-1.338-1.05-.85-1.65-2.013-.6-1.162-.6-2.512v-1.45l2.35 1.775-1.35 1.35q.725 1.8 2.425 2.838 1.7 1.037 4.075 1.137V11.1h-3v-.7h3V7.825q-.85-.175-1.425-.813Q9.65 6.375 9.65 5.5q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663 0 .875-.575 1.512-.575.638-1.425.813V10.4h3v.7h-3v9.05q2.375-.1 4.088-1.125Q18.15 18 18.85 16.2l-1.35-1.375 2.35-1.775v1.45q0 1.35-.6 2.512-.6 1.163-1.65 2.013-1.05.85-2.487 1.338-1.438.487-3.113.487Zm0-13.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q12.675 3.85 12 3.85t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Z"/>
    </Icon>
  );
});

IconMaterialAnchorW100.displayName = 'AmauiIconMaterialAnchorW100';

export default IconMaterialAnchorW100;
