import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 9.75 1.325-.65q.325-.15.675-.15.35 0 .675.15L14 9.75V5h-4ZM8 17q-.425 0-.713-.288Q7 16.425 7 16t.287-.713Q7.575 15 8 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q11.425 17 11 17Zm-3 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21ZM5 5v14V5Zm0 14h14V5h-3v6.375q0 .575-.475.862-.475.288-.975.038L12 11l-2.55 1.275q-.5.25-.975-.038Q8 11.95 8 11.375V5H5v14Z"/>
    </Icon>
  );
});

IconMaterialPackage.displayName = 'AmauiIconMaterialPackage';

export default IconMaterialPackage;
