import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElderlyWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyWoman'

      short_name='ElderlyWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 23q-.425 0-.712-.288Q13 22.425 13 22v-3h-2l-2.4 3.2q-.25.35-.65.4-.4.05-.75-.2t-.4-.65q-.05-.4.2-.75l1.5-2H6q0-.875.488-3.012.487-2.138 1.337-4.351.85-2.212 2.013-3.925Q11 6 12.35 6q.65 0 1.1.325.45.325.675.8l.8 1.675q.5.975 1.45 1.587.95.613 2.125.613.625 0 1.062.438.438.437.438 1.062v10q0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15-.15-.15-.15-.35v-10q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35v.5q0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15Q17 13.2 17 13v-.2q-1.1-.275-2-.925-.9-.65-1.5-1.575L13 13l1.9 5.675q.05.15.075.3.025.15.025.325V22q0 .425-.287.712Q14.425 23 14 23Zm-.5-17.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5q0-.2.1-.6-.275-.125-.437-.363Q11 2.3 11 2q0-.425.288-.713Q11.575 1 12 1q.3 0 .538.162.237.163.362.438.15-.05.3-.075.15-.025.3-.025.825 0 1.413.587.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588Z"/>
    </Icon>
  );
});

IconMaterialElderlyWoman.displayName = 'AmauiIconMaterialElderlyWoman';

export default IconMaterialElderlyWoman;
