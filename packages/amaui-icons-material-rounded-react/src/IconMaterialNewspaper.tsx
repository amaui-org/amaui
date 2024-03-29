import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewspaper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Newspaper'

      short_name='Newspaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V4q0-.425.2-.513.2-.087.5.213l.975.975.95-.95q.15-.15.325-.225.175-.075.375-.075t.375.062q.175.063.325.213L7 4.675l.975-.975q.15-.15.325-.213.175-.062.375-.062t.375.075q.175.075.325.225l.95.95.975-.975q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l.975.975.95-.95q.15-.15.325-.225.175-.075.375-.075t.375.062q.175.063.325.213l.975.975.975-.975q.15-.15.325-.213.175-.062.375-.062t.375.075q.175.075.325.225l.95.95.975-.975q.3-.3.5-.213.2.088.2.513v15q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h7v-6H4v6Zm9 0h7v-2h-7Zm0-4h7v-2h-7Zm-9-4h16V8H4Z"/>
    </Icon>
  );
});

IconMaterialNewspaper.displayName = 'AmauiIconMaterialNewspaper';

export default IconMaterialNewspaper;
