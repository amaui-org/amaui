import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPizzaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaSharpFilled'
      short_name='LocalPizza'

      {...props}
    >
      <path d="M12 22 2 7Q4.125 5.2 6.663 4.1Q9.2 3 12 3Q14.8 3 17.337 4.088Q19.875 5.175 22 7ZM9.5 10Q10.125 10 10.562 9.562Q11 9.125 11 8.5Q11 7.875 10.562 7.438Q10.125 7 9.5 7Q8.875 7 8.438 7.438Q8 7.875 8 8.5Q8 9.125 8.438 9.562Q8.875 10 9.5 10ZM12 15Q12.625 15 13.062 14.562Q13.5 14.125 13.5 13.5Q13.5 12.875 13.062 12.438Q12.625 12 12 12Q11.375 12 10.938 12.438Q10.5 12.875 10.5 13.5Q10.5 14.125 10.938 14.562Q11.375 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaSharpFilled.displayName = 'AmauiIconMaterialLocalPizzaSharpFilled';

export default IconMaterialLocalPizzaSharpFilled;
