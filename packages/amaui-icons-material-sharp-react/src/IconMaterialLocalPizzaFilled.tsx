import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPizzaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaFilled'

      short_name='LocalPizza'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22 2 7q2.125-1.8 4.663-2.9Q9.2 3 12 3t5.337 1.088Q19.875 5.175 22 7ZM9.5 10q.625 0 1.062-.438Q11 9.125 11 8.5t-.438-1.062Q10.125 7 9.5 7t-1.062.438Q8 7.875 8 8.5t.438 1.062Q8.875 10 9.5 10Zm2.5 5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 12 12 12t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaFilled.displayName = 'AmauiIconMaterialLocalPizzaFilled';

export default IconMaterialLocalPizzaFilled;
