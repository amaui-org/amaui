import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeachAccessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100'

      short_name='BeachAccess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.275 19.8-5.95-5.9.5-.5 5.95 5.95Zm-13.3-1.4q-.875-1.175-1.3-2.525-.425-1.35-.425-2.75 0-1.725.638-3.338.637-1.612 1.937-2.887 1.3-1.3 2.913-1.938 1.612-.637 3.287-.637 1.425 0 2.763.425 1.337.425 2.537 1.3Zm.1-1.1 1.95-1.95q-.4-.575-.8-1.225-.4-.65-.7-1.4-.3-.75-.463-1.612Q5.9 10.25 5.925 9.3q-1.1 1.925-.987 4.037.112 2.113 1.137 3.963Zm2.5-2.45 6.2-6.25q-1.075-.825-2.2-1.288-1.125-.462-2.137-.612-1.013-.15-1.838.025-.825.175-1.275.625-.45.45-.625 1.275t-.037 1.837q.137 1.013.6 2.151.462 1.137 1.312 2.237Zm6.75-6.75 1.95-1.95q-1.875-1.1-4-1.175-2.125-.075-4.05.975.975-.05 1.837.137.863.188 1.613.488t1.413.7q.662.4 1.237.825Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100.displayName = 'AmauiIconMaterialBeachAccessW100';

export default IconMaterialBeachAccessW100;
