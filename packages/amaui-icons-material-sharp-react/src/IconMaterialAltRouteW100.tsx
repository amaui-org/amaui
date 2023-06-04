import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltRouteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRouteW100'

      short_name='AltRoute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.35V17q0-1.35-.375-2.175-.375-.825-1.175-1.5l.5-.5q.35.325.738.837.387.513.662 1.088.275-.65.788-1.262.512-.613 1.087-1.113 1.35-1.175 2.075-2.95.725-1.775.675-5.125L14.4 6.525l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.275-2.275q.05 3.3-.688 5.262-.737 1.963-2.262 3.363-.875.8-1.45 1.6T12.35 17v4.35ZM6.925 7.725Q6.8 7.2 6.738 6.2q-.063-1-.063-1.95L4.4 6.525l-.5-.5 3.1-3.1 3.1 3.1-.5.5L7.375 4.3q-.025.925.038 1.825.062.9.187 1.45ZM8.7 11.9q-.375-.475-.737-1.113-.363-.637-.538-1.137l.675-.175q.15.425.438.963.287.537.662.962Z"/>
    </Icon>
  );
});

IconMaterialAltRouteW100.displayName = 'AmauiIconMaterialAltRouteW100';

export default IconMaterialAltRouteW100;
