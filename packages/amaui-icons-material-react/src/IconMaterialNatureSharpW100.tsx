import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureSharpW100'
      short_name='Nature'

      {...props}
    >
      <path d="M6.3 20.85V20.15H11.65V15.2H9Q7.45 15.2 6.375 14.125Q5.3 13.05 5.3 11.5Q5.3 10.225 6.175 9.275Q7.05 8.325 8.25 7.8Q8.45 5.8 9.45 4.8Q10.45 3.8 12 3.8Q13.55 3.8 14.55 4.8Q15.55 5.8 15.75 7.8Q16.975 8.275 17.837 9.25Q18.7 10.225 18.7 11.5Q18.7 13.05 17.625 14.125Q16.55 15.2 15 15.2H12.35V20.15H17.7V20.85ZM9 14.5H15Q16.25 14.5 17.125 13.625Q18 12.75 18 11.5Q18 10.425 17.275 9.637Q16.55 8.85 15.5 8.45L15.1 8.3L15.05 7.8Q14.875 6.1 14.075 5.3Q13.275 4.5 12 4.5Q10.725 4.5 9.925 5.3Q9.125 6.1 8.95 7.8L8.9 8.3L8.3 8.55Q7.35 8.95 6.675 9.712Q6 10.475 6 11.5Q6 12.75 6.875 13.625Q7.75 14.5 9 14.5ZM12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Z"/>
    </Icon>
  );
});

IconMaterialNatureSharpW100.displayName = 'AmauiIconMaterialNatureSharpW100';

export default IconMaterialNatureSharpW100;
