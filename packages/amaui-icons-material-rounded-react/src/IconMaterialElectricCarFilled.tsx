import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricCarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCarFilled'

      short_name='ElectricCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15v.5q0 .625-.438 1.062Q5.125 17 4.5 17t-1.062-.438Q3 16.125 3 15.5V8l2.1-6q.15-.45.538-.725Q6.025 1 6.5 1h11q.475 0 .863.275.387.275.537.725L21 8v7.5q0 .625-.438 1.062Q20.125 17 19.5 17t-1.062-.438Q18 16.125 18 15.5V15Zm-.2-9h12.4l-1.05-3H6.85Zm1.7 6q.625 0 1.062-.438Q9 11.125 9 10.5t-.438-1.062Q8.125 9 7.5 9t-1.062.438Q6 9.875 6 10.5t.438 1.062Q6.875 12 7.5 12Zm9 0q.625 0 1.062-.438Q18 11.125 18 10.5t-.438-1.062Q17.125 9 16.5 9t-1.062.438Q15 9.875 15 10.5t.438 1.062Q15.875 12 16.5 12ZM13 23l-6-3h4v-2l6 3h-4Z"/>
    </Icon>
  );
});

IconMaterialElectricCarFilled.displayName = 'AmauiIconMaterialElectricCarFilled';

export default IconMaterialElectricCarFilled;
