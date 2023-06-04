import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBarW100Filled'

      short_name='SportsBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 18.575V12.35q-1.125-.225-1.838-.963-.712-.737-.712-1.937 0-.95.575-1.713.575-.762 1.6-1.087.45-.975 1.287-1.588.838-.612 1.988-.612.65 0 1.238.225.587.225 1.212.75.175-.075.338-.113.162-.037.362-.037 1.15 0 1.9.875t.75 2.025q0 .4-.038.675-.037.275-.137.525h2.225v7.5h-2.9v1.7ZM6.05 9.45q0 .9.65 1.55t1.55.65q.775 0 1.3-.425t1.025-.975q.6-.65 1.213-1.113.612-.462 1.562-.462h2.55q.125-1.125-.462-1.913-.588-.787-1.488-.787-.275 0-.487.037-.213.038-.413.163L12.6 5.8q-.275-.25-.725-.45-.45-.2-1.075-.2-.8 0-1.5.425t-1.05 1.2l-.225.45-.475.15q-.675.225-1.087.787-.413.563-.413 1.288Zm9.7 6.725h2.2v-6.1h-2.2Z"/>
    </Icon>
  );
});

IconMaterialSportsBarW100Filled.displayName = 'AmauiIconMaterialSportsBarW100Filled';

export default IconMaterialSportsBarW100Filled;
