import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='House'

      short_name='House'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20H6q-.425 0-.713-.288Q5 19.425 5 19v-7H3.3q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275L16 6.6V5q0-.425.288-.713Q16.575 4 17 4h1q.425 0 .712.287Q19 4.575 19 5v4.3l2.025 1.825q.275.225.15.55Q21.05 12 20.7 12H19v7q0 .425-.288.712Q18.425 20 18 20h-5v-6h-2Zm-4-2h2v-5q0-.425.288-.713Q9.575 12 10 12h4q.425 0 .713.287.287.288.287.713v5h2v-7.8l-5-4.5-5 4.5Zm3-7.975h4q0-.8-.6-1.313Q12.8 8.2 12 8.2q-.8 0-1.4.512-.6.513-.6 1.313ZM10 12h4-4Z"/>
    </Icon>
  );
});

IconMaterialHouse.displayName = 'AmauiIconMaterialHouse';

export default IconMaterialHouse;
