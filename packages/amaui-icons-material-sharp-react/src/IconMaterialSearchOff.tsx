import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOff'

      short_name='SearchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-2.075 0-3.537-1.462Q2 19.075 2 17q0-2.075 1.463-3.538Q4.925 12 7 12t3.538 1.462Q12 14.925 12 17q0 2.075-1.462 3.538Q9.075 22 7 22Zm13.6-1-6.4-6.4q-.3-.325-.638-.662-.337-.338-.662-.638.95-.6 1.525-1.6T15 9.5q0-1.875-1.312-3.188Q12.375 5 10.5 5 8.625 5 7.312 6.312 6 7.625 6 9.5q0 .15.013.287.012.138.037.288-.45.05-.988.2-.537.15-.962.35-.05-.275-.075-.55Q4 9.8 4 9.5q0-2.725 1.888-4.613Q7.775 3 10.5 3t4.613 1.887Q17 6.775 17 9.5q0 1.075-.337 2.037-.338.963-.938 1.763L22 19.6ZM5.225 19.475 7 17.7l1.75 1.775.725-.7L7.7 17l1.775-1.775-.7-.7L7 16.3l-1.775-1.775-.7.7L6.3 17l-1.775 1.775Z"/>
    </Icon>
  );
});

IconMaterialSearchOff.displayName = 'AmauiIconMaterialSearchOff';

export default IconMaterialSearchOff;
