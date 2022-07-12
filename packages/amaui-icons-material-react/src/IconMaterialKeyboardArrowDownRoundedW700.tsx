import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownRoundedW700'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 15.55Q11.7 15.55 11.413 15.438Q11.125 15.325 10.9 15.1L6.3 10.5Q5.85 10.05 5.85 9.4Q5.85 8.75 6.3 8.3Q6.75 7.85 7.4 7.85Q8.05 7.85 8.5 8.3L12 11.8L15.5 8.3Q15.95 7.85 16.6 7.85Q17.25 7.85 17.7 8.3Q18.15 8.75 18.15 9.4Q18.15 10.05 17.7 10.5L13.1 15.1Q12.875 15.325 12.588 15.438Q12.3 15.55 12 15.55Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardArrowDownRoundedW700;
