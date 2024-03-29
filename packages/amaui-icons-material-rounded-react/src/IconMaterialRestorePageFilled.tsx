import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestorePageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageFilled'

      short_name='RestorePage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm-6-4.25q1.95 0 3.35-1.4 1.4-1.4 1.4-3.35 0-1.95-1.4-3.35-1.4-1.4-3.35-1.4-.95 0-1.775.35t-1.475.95v-.8q0-.325-.212-.538Q8.325 8 8 8q-.325 0-.537.212-.213.213-.213.538v2.5q0 .425.287.712.288.288.713.288h2.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212H9.7q.425-.45 1.025-.725.6-.275 1.275-.275 1.35 0 2.3.95.95.95.95 2.3 0 1.35-.95 2.3-.95.95-2.3.95-.975 0-1.738-.512-.762-.513-1.187-1.338-.075-.175-.25-.287Q8.65 14 8.45 14q-.475 0-.712.325-.238.325-.038.725.575 1.2 1.725 1.95 1.15.75 2.575.75Z"/>
    </Icon>
  );
});

IconMaterialRestorePageFilled.displayName = 'AmauiIconMaterialRestorePageFilled';

export default IconMaterialRestorePageFilled;
