import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDrawW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawW100Filled'

      short_name='Draw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 20.35v-.7H14q1.5 0 2.575-.612 1.075-.613 1.075-1.538 0-.725-.7-1.3-.7-.575-1.975-.9l.575-.55q1.375.4 2.088 1.125.712.725.712 1.625 0 1.35-1.375 2.1T14 20.35Zm-7.625-7.125q-1.2-.4-1.787-.988Q3.65 11.65 3.65 11q0-.775.675-1.375t2.5-1.4q1.65-.725 2.237-1.188Q9.65 6.575 9.65 6q0-.675-.712-1.163Q8.225 4.35 7 4.35q-.925 0-1.562.262-.638.263-.788.613h-.8q.2-.65 1.013-1.113Q5.675 3.65 7 3.65q1.475 0 2.413.675Q10.35 5 10.35 6q0 .8-.675 1.438Q9 8.075 7.1 8.875q-1.575.675-2.162 1.15-.588.475-.588.975 0 .475.55.912.55.438 1.675.788Zm12-4.5L15.95 6.65 17.5 5.1l2.075 2.075ZM5.075 19.6v-2.075l9.1-9.1L16.25 10.5l-9.1 9.1Z"/>
    </Icon>
  );
});

IconMaterialDrawW100Filled.displayName = 'AmauiIconMaterialDrawW100Filled';

export default IconMaterialDrawW100Filled;
