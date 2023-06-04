import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBoatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoatW100'

      short_name='DirectionsBoat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.55Zm-7.05 4.1-1.475-5.475L5.3 11.55V5.8h5v-3h3.4v3h5v5.75l1.925.675-1.575 5.425q-.8-.375-1.437-.925-.638-.55-1.613-1.675-.9 1.1-1.812 1.875-.913.775-2.188.775-1.275 0-2.188-.775Q8.9 16.15 8 15.05q-.95 1.125-1.6 1.675-.65.55-1.45.925Zm-2.3 4.05V21H4q1.05 0 2.075-.325Q7.1 20.35 8 19.7q.9.65 1.925.95 1.025.3 2.075.3 1.05 0 2.075-.3 1.025-.3 1.925-.95.9.65 1.925.975Q18.95 21 20 21h1.35v.7H20q-1.05 0-2.05-.25-1-.25-1.95-.75-.95.5-1.962.75-1.013.25-2.038.25t-2.037-.25Q8.95 21.2 8 20.7q-.95.5-1.95.75T4 21.7ZM6 11.3l6-1.95 6 1.95V6.5H6Zm6 5.7q1.175 0 1.963-.812.787-.813 2.037-2.238 1.175 1.35 1.613 1.825.437.475 1.037.825l1.1-3.95L12 10.1l-7.75 2.55 1.1 3.95q.6-.35 1.038-.8.437-.45 1.612-1.85 1.25 1.425 2.038 2.238Q10.825 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoatW100.displayName = 'AmauiIconMaterialDirectionsBoatW100';

export default IconMaterialDirectionsBoatW100;
