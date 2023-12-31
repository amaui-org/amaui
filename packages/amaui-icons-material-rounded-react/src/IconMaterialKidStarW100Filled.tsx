import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKidStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarW100Filled'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m331-668 102-137q8.8-11.871 20.9-17.435Q466-828 480-828q14 0 26.1 5.565Q518.2-816.871 527-805l102 137 158 54q20 7 30.5 22.661 10.5 15.66 10.5 34.598 0 8.741-2.567 17.312Q822.867-530.857 817-523L713-384l4 150q1 26.145-17.348 44.072Q681.304-172 657-172q1 0-17-2l-160-48-160 48q-5 2-9.235 2H303q-25 0-43-17.928-18-17.927-17-44.072l4-151-104-138q-5.867-7.957-8.433-16.638Q132-548.319 132-557q0-18.831 11.073-35.026Q154.145-608.221 174-615l157-53Z"/>
    </Icon>
  );
});

IconMaterialKidStarW100Filled.displayName = 'AmauiIconMaterialKidStarW100Filled';

export default IconMaterialKidStarW100Filled;
