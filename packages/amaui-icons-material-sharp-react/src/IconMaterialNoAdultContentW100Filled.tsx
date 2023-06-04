import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoAdultContentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAdultContentW100Filled'

      short_name='NoAdultContent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Zm0-.7q1.575 0 2.95-.562 1.375-.563 2.45-1.538L14.5 15h1l2.4 2.4q.975-1.075 1.538-2.45Q20 13.575 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.575 0-2.95.562-1.375.563-2.45 1.563L9.475 9H8.5L6.1 6.6q-.975 1.075-1.538 2.45Q4 10.425 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm-6.5-6.25L6.825 12 5.5 10.25h.875l.875 1.175.875-1.175H9L7.7 12 9 13.75h-.875l-.875-1.175-.875 1.175Zm4.75 0L11.575 12l-1.325-1.75h.875L12 11.425l.875-1.175h.875L12.45 12l1.3 1.75h-.875L12 12.575l-.875 1.175Zm4.75 0L16.325 12 15 10.25h.875l.875 1.175.875-1.175h.875L17.2 12l1.3 1.75h-.875l-.875-1.175-.875 1.175Z"/>
    </Icon>
  );
});

IconMaterialNoAdultContentW100Filled.displayName = 'AmauiIconMaterialNoAdultContentW100Filled';

export default IconMaterialNoAdultContentW100Filled;
