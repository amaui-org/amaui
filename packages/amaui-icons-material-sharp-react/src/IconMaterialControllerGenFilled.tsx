import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControllerGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenFilled'

      short_name='ControllerGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm0-2q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Zm-.7-3.3q.3.3.7.3.4 0 .7-.3l1.4-1.4q.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3-.4 0-.7.3l-1.4 1.4q-.3.3-.3.7 0 .4.3.7ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialControllerGenFilled.displayName = 'AmauiIconMaterialControllerGenFilled';

export default IconMaterialControllerGenFilled;
