import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThunderstormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormW100Filled'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 21.125-1.15-.575q-.35-.175-.412-.525-.063-.35.187-.625L15 17.775q.05-.05.113-.087.062-.038.137-.038.225 0 .312.2.088.2-.062.375l-1.45 1.65 1.15.575q.35.175.413.525.062.35-.188.625L14 23.225q-.05.05-.112.087-.063.038-.138.038-.225 0-.312-.2-.088-.2.062-.375Zm-6 0L7.8 20.55q-.35-.175-.412-.525-.063-.35.187-.625L9 17.775q.05-.05.113-.087.062-.038.137-.038.225 0 .312.2.088.2-.062.375l-1.45 1.65 1.15.575q.35.175.413.525.062.35-.188.625L8 23.225q-.05.05-.112.087-.063.038-.138.038-.225 0-.312-.2-.088-.2.062-.375ZM7.5 15.35q-2.025 0-3.438-1.412Q2.65 12.525 2.65 10.5q0-1.9 1.288-3.275Q5.225 5.85 7.175 5.65q.725-1.4 1.988-2.2 1.262-.8 2.837-.8 2.125 0 3.638 1.425 1.512 1.425 1.737 3.55 1.875.1 2.925 1.237Q21.35 10 21.35 11.5q0 1.6-1.125 2.725T17.5 15.35Z"/>
    </Icon>
  );
});

IconMaterialThunderstormW100Filled.displayName = 'AmauiIconMaterialThunderstormW100Filled';

export default IconMaterialThunderstormW100Filled;
