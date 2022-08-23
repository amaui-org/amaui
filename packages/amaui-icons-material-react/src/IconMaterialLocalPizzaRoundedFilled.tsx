import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPizzaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaRoundedFilled'
      short_name='LocalPizza'

      {...props}
    >
      <path d="M12 20.4Q11.525 20.4 11.075 20.175Q10.625 19.95 10.325 19.5L3.125 8.675Q2.65 7.95 2.788 7.087Q2.925 6.225 3.6 5.775Q5.475 4.5 7.6 3.75Q9.725 3 12 3Q14.275 3 16.4 3.737Q18.525 4.475 20.4 5.775Q21.05 6.225 21.2 7.087Q21.35 7.95 20.875 8.675L13.675 19.5Q13.375 19.95 12.925 20.175Q12.475 20.4 12 20.4ZM9.5 10Q10.125 10 10.562 9.562Q11 9.125 11 8.5Q11 7.875 10.562 7.438Q10.125 7 9.5 7Q8.875 7 8.438 7.438Q8 7.875 8 8.5Q8 9.125 8.438 9.562Q8.875 10 9.5 10ZM12 15Q12.625 15 13.062 14.562Q13.5 14.125 13.5 13.5Q13.5 12.875 13.062 12.438Q12.625 12 12 12Q11.375 12 10.938 12.438Q10.5 12.875 10.5 13.5Q10.5 14.125 10.938 14.562Q11.375 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaRoundedFilled.displayName = 'AmauiIconMaterialLocalPizzaRoundedFilled';

export default IconMaterialLocalPizzaRoundedFilled;
