import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRamenDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningW100'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 20h4v-1.15l.35-.1q2-.575 3.4-1.95t1.9-2.8H3.6q.5 1.425 1.875 2.8 1.375 1.375 3.375 1.95l.35.1Zm.05.7q-.325 0-.537-.213-.213-.212-.213-.537v-.6q-2.1-.8-3.587-2.2-1.488-1.4-2.063-3.125-.1-.275.063-.5.162-.225.487-.225H4V5.975q0-.275.2-.488.2-.212.475-.262l16-1.725q.15-.025.263.087.112.113.112.263 0 .125-.088.212-.087.088-.212.113L9.1 5.45V7.6h11.75q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.1v5h9.95q.325 0 .488.225.162.225.062.5-.575 1.725-2.1 3.125-1.525 1.4-3.6 2.2v.6q0 .325-.212.537-.213.213-.538.213ZM6.9 7.6h1.5V5.55l-1.5.15Zm-2.2 0h1.5V5.75l-1.5.15Zm2.2 5.7h1.5v-5H6.9Zm-2.2 0h1.5v-5H4.7Zm6.525 6.7Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningW100.displayName = 'AmauiIconMaterialRamenDiningW100';

export default IconMaterialRamenDiningW100;
