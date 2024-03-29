import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsFilled'

      short_name='Sensors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.925 19.075q-1.35-1.375-2.137-3.188Q2 14.075 2 12q0-2.1.788-3.913.787-1.812 2.137-3.162L6.35 6.35q-1.1 1.1-1.725 2.55Q4 10.35 4 12q0 1.675.625 3.125T6.35 17.65ZM7.75 16.25q-.8-.825-1.275-1.913Q6 13.25 6 12q0-1.275.475-2.363Q6.95 8.55 7.75 7.75l1.425 1.425q-.55.55-.863 1.275Q8 11.175 8 12q0 .825.312 1.55.313.725.863 1.275ZM12 14q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm4.25 2.25-1.425-1.425q.55-.55.863-1.275Q16 12.825 16 12q0-.825-.312-1.55-.313-.725-.863-1.275L16.25 7.75q.8.8 1.275 1.887Q18 10.725 18 12q0 1.25-.475 2.337-.475 1.088-1.275 1.913Zm2.825 2.825L17.65 17.65q1.1-1.1 1.725-2.55Q20 13.65 20 12q0-1.675-.625-3.125T17.65 6.35l1.425-1.425q1.35 1.35 2.137 3.162Q22 9.9 22 12q0 2.075-.788 3.887-.787 1.813-2.137 3.188Z"/>
    </Icon>
  );
});

IconMaterialSensorsFilled.displayName = 'AmauiIconMaterialSensorsFilled';

export default IconMaterialSensorsFilled;
