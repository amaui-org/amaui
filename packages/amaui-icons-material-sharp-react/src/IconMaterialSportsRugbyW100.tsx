import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsRugbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsRugbyW100'

      short_name='SportsRugby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 20.2q-1.2 0-2.113-.162-.912-.163-1.187-.438t-.412-1.175q-.138-.9-.138-2.075 0-2.675.913-5.125Q5.625 8.775 7.2 7.2q1.575-1.575 4.025-2.488 2.45-.912 5.125-.912 1.2 0 2.112.162.913.163 1.188.438.275.275.412 1.175.138.9.138 2.075 0 2.675-.912 5.125-.913 2.45-2.488 4.025-1.575 1.575-4.025 2.488-2.45.912-5.125.912Zm-3.1-2.25q.8-2.575 2.05-4.688Q7.85 11.15 9.5 9.5q1.625-1.625 3.75-2.875t4.7-2.075q-2.95-.275-5.775.612Q9.35 6.05 7.7 7.7q-1.625 1.625-2.525 4.488-.9 2.862-.625 5.762Zm1.55 1.5q2.875.275 5.712-.613Q14.65 17.95 16.3 16.3q1.625-1.625 2.525-4.513.9-2.887.625-5.787-.825 2.6-2.062 4.725Q16.15 12.85 14.5 14.5t-3.762 2.9Q8.625 18.65 6.1 19.45Zm-1.15-.35q2.525-.675 4.9-2Q12.225 15.775 14 14q1.725-1.725 3.05-4.113 1.325-2.387 2-4.987-2.525.675-4.9 2Q11.775 8.225 10 10q-1.725 1.725-3.05 4.113-1.325 2.387-2 4.987ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialSportsRugbyW100.displayName = 'AmauiIconMaterialSportsRugbyW100';

export default IconMaterialSportsRugbyW100;
