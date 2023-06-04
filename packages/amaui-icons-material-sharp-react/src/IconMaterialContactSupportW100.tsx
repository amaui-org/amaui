import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactSupportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportW100'

      short_name='ContactSupport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.3 19.75V17.7h-1.8q-3 0-5.1-2.1-2.1-2.1-2.1-5.1 0-3 2.1-5.1 2.1-2.1 5.1-2.1 1.5 0 2.812.562 1.313.563 2.288 1.538.975.975 1.537 2.288Q18.7 9 18.7 10.5q0 2.85-1.512 5.25-1.513 2.4-3.888 4Zm-1.75-4.3q.275 0 .463-.188.187-.187.187-.462t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.462q.187.188.462.188Zm-.35-2.85h.7q.05-.575.263-.95.212-.375.937-1.1.425-.425.662-.85.238-.425.238-1 0-1.025-.712-1.638-.713-.612-1.738-.612-.875 0-1.488.475Q9.45 7.4 9.15 8.05l.65.25q.225-.45.625-.8.4-.35 1.125-.35.9 0 1.325.487.425.488.425 1.063 0 .525-.262.875-.263.35-.688.775-.675.6-.912 1.125Q11.2 12 11.2 12.6ZM14 17v1.35q1.775-1.5 2.887-3.512Q18 12.825 18 10.5q0-2.725-1.887-4.613Q14.225 4 11.5 4 8.775 4 6.888 5.887 5 7.775 5 10.5q0 2.725 1.888 4.613Q8.775 17 11.5 17Zm-2.5-5.825Z"/>
    </Icon>
  );
});

IconMaterialContactSupportW100.displayName = 'AmauiIconMaterialContactSupportW100';

export default IconMaterialContactSupportW100;
