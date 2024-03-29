import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalHospital = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospital'

      short_name='LocalHospital'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q.625 0 1.062-.438.438-.437.438-1.062v-2h2q.625 0 1.062-.438Q17 12.625 17 12t-.438-1.062q-.437-.438-1.062-.438h-2v-2q0-.625-.438-1.062Q12.625 7 12 7t-1.062.438Q10.5 7.875 10.5 8.5v2h-2q-.625 0-1.062.438Q7 11.375 7 12t.438 1.062q.437.438 1.062.438h2v2q0 .625.438 1.062Q11.375 17 12 17Zm-7 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLocalHospital.displayName = 'AmauiIconMaterialLocalHospital';

export default IconMaterialLocalHospital;
