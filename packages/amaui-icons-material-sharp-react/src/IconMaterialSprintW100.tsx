import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSprintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprintW100'

      short_name='Sprint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.425 19.075-.5-.5L15.15 8.35h-4.8v2h-.7v-2.7h6.275l3.125 3.125q.725.725 1.625 1.163.9.437 1.925.437v.7q-1.175 0-2.2-.5-1.025-.5-1.85-1.325L17.2 9.9l-3.375 3.35 2.125 2.125-5.25 3.05-.35-.65 4.425-2.55-2.75-2.75ZM4.3 12.35v-.7H8v.7Zm-2-3v-.7H6v.7Zm17.175-2q-.575 0-.975-.4t-.4-.975q0-.575.4-.975t.975-.4q.575 0 .975.4t.4.975q0 .575-.4.975t-.975.4ZM4.3 6.35v-.7H8v.7Z"/>
    </Icon>
  );
});

IconMaterialSprintW100.displayName = 'AmauiIconMaterialSprintW100';

export default IconMaterialSprintW100;
