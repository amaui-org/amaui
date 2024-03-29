import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsW100'

      short_name='Sensors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.85 18.15q-1.2-1.2-1.875-2.775T3.3 12q0-1.8.675-3.375T5.85 5.85l.5.5q-1.1 1.1-1.725 2.55Q4 10.35 4 12q0 1.675.625 3.125T6.35 17.65Zm2.825-2.825q-.65-.65-1.012-1.5Q7.3 12.975 7.3 12t.363-1.825q.362-.85 1.012-1.5l.5.5q-.55.55-.863 1.275Q8 11.175 8 12q0 .825.312 1.55.313.725.863 1.275ZM12 12.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm3.325 2.625-.5-.5q.55-.55.863-1.275Q16 12.825 16 12q0-.825-.312-1.55-.313-.725-.863-1.275l.5-.5q.65.65 1.012 1.5.363.85.363 1.825t-.363 1.825q-.362.85-1.012 1.5Zm2.825 2.825-.5-.5q1.1-1.1 1.725-2.55Q20 13.65 20 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l.5-.5q1.2 1.2 1.875 2.775T20.7 12q0 1.8-.675 3.375T18.15 18.15Z"/>
    </Icon>
  );
});

IconMaterialSensorsW100.displayName = 'AmauiIconMaterialSensorsW100';

export default IconMaterialSensorsW100;
