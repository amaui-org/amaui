import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person2RoundedFilled'
      short_name='Person2'

      {...props}
    >
      <path d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.362Q10.525 4 12 4t2.575.938q1.1.937 1.3 2.362l.325 2.45q.125.9-.475 1.575-.6.675-1.5.675ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialPerson2RoundedFilled;
