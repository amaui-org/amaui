import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOff'

      short_name='LocationOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.775 10.9 11.1 8.225q.2-.125.425-.175Q11.75 8 12 8q.825 0 1.413.587Q14 9.175 14 10q0 .25-.05.475-.05.225-.175.425Zm6.7 12.4-4.8-4.8q-.775.85-1.687 1.725Q13.075 21.1 12 22q-4.025-3.425-6.012-6.35Q4 12.725 4 10.2q0-.8.125-1.525.125-.725.35-1.375l-3.8-3.8L2.1 2.075l19.8 19.8ZM18.2 15.325q.9-1.4 1.35-2.663Q20 11.4 20 10.2q0-3.75-2.413-5.975Q15.175 2 12 2q-1.475 0-2.812.487Q7.85 2.975 6.775 3.9L8.2 5.325q.775-.65 1.738-.988Q10.9 4 12 4q2.525 0 4.262 1.737Q18 7.475 18 10.2q0 .8-.3 1.712-.3.913-.95 1.963ZM12 19.35q.65-.575 1.213-1.138.562-.562 1.062-1.112L6.1 8.925q-.05.325-.075.637Q6 9.875 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm-1.8-6.325Zm2.3-3.4Z"/>
    </Icon>
  );
});

IconMaterialLocationOff.displayName = 'AmauiIconMaterialLocationOff';

export default IconMaterialLocationOff;
