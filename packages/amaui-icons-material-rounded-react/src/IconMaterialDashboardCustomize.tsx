import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDashboardCustomize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomize'

      short_name='DashboardCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11q-.425 0-.712-.288Q3 10.425 3 10V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v6q0 .425-.287.712Q10.425 11 10 11Zm1-6v4Zm9 6q-.425 0-.712-.288Q13 10.425 13 10V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v6q0 .425-.288.712Q20.425 11 20 11Zm1-6v4ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-6q0-.425.288-.713Q3.575 13 4 13h6q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712Q10.425 21 10 21Zm1-6v4Zm12 6q-.425 0-.712-.288Q16 20.425 16 20v-2h-2.025q-.425 0-.7-.288Q13 17.425 13 17t.288-.712Q13.575 16 14 16h2v-2.025q0-.425.288-.7Q16.575 13 17 13t.712.287Q18 13.575 18 14v2h2.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 18 20 18h-2v2.025q0 .425-.288.7Q17.425 21 17 21ZM15 5v4h4V5ZM5 5v4h4V5Zm0 10v4h4v-4Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomize.displayName = 'AmauiIconMaterialDashboardCustomize';

export default IconMaterialDashboardCustomize;
