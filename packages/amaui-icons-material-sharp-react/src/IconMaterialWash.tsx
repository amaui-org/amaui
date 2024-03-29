import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wash'

      short_name='Wash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.5 8q-1.05 0-1.775-.725Q16 6.55 16 5.5q0-.625.388-1.4.387-.775.862-1.475.55-.8 1.25-1.625.7.825 1.25 1.625.475.7.863 1.475.387.775.387 1.4 0 1.05-.725 1.775Q19.55 8 18.5 8Zm-5 1q-.625 0-1.062-.438Q12 8.125 12 7.5q0-.325.238-.75.237-.425.512-.825.325-.45.75-.925.425.475.75.925.275.4.512.825.238.425.238.75 0 .625-.438 1.062Q14.125 9 13.5 9ZM1 23V12.7L9.125 5l1.625 1.7L8.875 10H20v2.5h-8v1h10V16H12v1h9v2.5h-9v1h7V23Zm2-2h7v-9H7V9.775l-4 3.75Zm3.5-5.625Z"/>
    </Icon>
  );
});

IconMaterialWash.displayName = 'AmauiIconMaterialWash';

export default IconMaterialWash;
