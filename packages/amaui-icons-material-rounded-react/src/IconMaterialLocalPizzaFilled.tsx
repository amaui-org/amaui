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
      <path d="M12 20.4q-.475 0-.925-.225-.45-.225-.75-.675l-7.2-10.825q-.475-.725-.337-1.588.137-.862.812-1.312Q5.475 4.5 7.6 3.75T12 3q2.275 0 4.4.737 2.125.738 4 2.038.65.45.8 1.312.15.863-.325 1.588l-7.2 10.825q-.3.45-.75.675-.45.225-.925.225ZM9.5 10q.625 0 1.062-.438Q11 9.125 11 8.5t-.438-1.062Q10.125 7 9.5 7t-1.062.438Q8 7.875 8 8.5t.438 1.062Q8.875 10 9.5 10Zm2.5 5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 12 12 12t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaFilled.displayName = 'AmauiIconMaterialLocalPizzaFilled';

export default IconMaterialLocalPizzaFilled;
