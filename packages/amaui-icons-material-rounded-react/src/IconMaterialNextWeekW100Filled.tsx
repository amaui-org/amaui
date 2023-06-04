import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextWeekW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeekW100Filled'

      short_name='NextWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.25 16.35 2.325-2.325q.225-.225.225-.525 0-.3-.225-.525L11.25 10.65q-.1-.1-.238-.113-.137-.012-.262.113t-.125.25q0 .125.125.25l2.35 2.35-2.35 2.35q-.1.1-.113.237-.012.138.113.263t.25.125q.125 0 .25-.125ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425ZM10 7.3h4V6.1q0-.35-.225-.575Q13.55 5.3 13.2 5.3h-2.4q-.35 0-.575.225Q10 5.75 10 6.1Z"/>
    </Icon>
  );
});

IconMaterialNextWeekW100Filled.displayName = 'AmauiIconMaterialNextWeekW100Filled';

export default IconMaterialNextWeekW100Filled;
