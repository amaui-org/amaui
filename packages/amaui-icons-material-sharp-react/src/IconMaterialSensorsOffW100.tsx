import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsOffW100'

      short_name='SensorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 8.725 9.725q-.35.5-.537 1.062Q8 11.35 8 12q0 .825.312 1.55.313.725.863 1.275l-.5.5q-.65-.65-1.012-1.5Q7.3 12.975 7.3 12q0-.8.25-1.5t.675-1.275l-2.35-2.35Q5 7.925 4.5 9.225T4 12q0 1.675.625 3.125T6.35 17.65l-.5.5q-1.2-1.2-1.875-2.775T3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L3.15 4.15l.5-.5 16.7 16.7Zm-.475-4.275-.5-.5q.55-.9.837-1.925Q20 13.125 20 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l.5-.5q1.2 1.2 1.875 2.775T20.7 12q0 1.275-.337 2.425-.338 1.15-.988 2.15Zm-2.95-2.95-.575-.575q.075-.25.113-.513Q16 12.275 16 12q0-.825-.312-1.55-.313-.725-.863-1.275l.5-.5q.65.65 1.012 1.5.363.85.363 1.825 0 .425-.075.825-.075.4-.2.8Z"/>
    </Icon>
  );
});

IconMaterialSensorsOffW100.displayName = 'AmauiIconMaterialSensorsOffW100';

export default IconMaterialSensorsOffW100;
