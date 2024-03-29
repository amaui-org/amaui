import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightsStayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayFilled'

      short_name='NightsStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 22q-.825 0-1.587-.113Q9.7 21.775 8.9 21.5q.525-.275.938-.7.412-.425.712-.95.2-.325.325-.8Q11 18.575 11 18q0-1.575-.925-2.662Q9.15 14.25 7.5 14q-.6-.975-1.575-1.488Q4.95 12 4 12q-.525 0-1.037.113-.513.112-.963.337-.075-2 .587-3.8.663-1.8 1.888-3.2 1.225-1.4 2.9-2.3Q9.05 2.25 11 2.05q.4-.05.562.2.163.25-.012.65-1.05 2.325-.862 4.725.187 2.4 1.324 4.387Q13.15 14 15.125 15.35t4.525 1.6q.425.05.563.312.137.263-.113.588-1.425 2-3.538 3.075Q14.45 22 12.05 22ZM7 20H4q-1.25 0-2.125-.863Q1 18.275 1 17q0-1.25.875-2.125T4 14q.975 0 1.738.562Q6.5 15.125 6.8 16H7q.825 0 1.412.587Q9 17.175 9 18q0 .825-.588 1.413Q7.825 20 7 20Z"/>
    </Icon>
  );
});

IconMaterialNightsStayFilled.displayName = 'AmauiIconMaterialNightsStayFilled';

export default IconMaterialNightsStayFilled;
