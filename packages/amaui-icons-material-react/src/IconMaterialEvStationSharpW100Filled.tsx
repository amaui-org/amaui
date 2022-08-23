import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEvStationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStationSharpW100Filled'
      short_name='EvStation'

      {...props}
    >
      <path d="M8.35 16 11 11.3H9.65V8L7 13H8.35ZM5.3 19.7V4.3H12.7V11.5H15.1V19H17.9V10.9Q17.675 11.05 17.425 11.125Q17.175 11.2 16.9 11.2Q16.175 11.2 15.688 10.712Q15.2 10.225 15.2 9.5Q15.2 8.85 15.6 8.363Q16 7.875 16.65 7.8L14.15 5.3L14.65 4.8L18 8.15Q18.275 8.425 18.438 8.775Q18.6 9.125 18.6 9.5V19.7H14.4V12.2H12.7V19.7ZM16.9 10.5Q17.325 10.5 17.613 10.212Q17.9 9.925 17.9 9.5Q17.9 9.075 17.613 8.787Q17.325 8.5 16.9 8.5Q16.475 8.5 16.188 8.787Q15.9 9.075 15.9 9.5Q15.9 9.925 16.188 10.212Q16.475 10.5 16.9 10.5Z"/>
    </Icon>
  );
});

IconMaterialEvStationSharpW100Filled.displayName = 'AmauiIconMaterialEvStationSharpW100Filled';

export default IconMaterialEvStationSharpW100Filled;
