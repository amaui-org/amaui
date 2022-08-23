import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibleForwardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForwardRounded'
      short_name='AccessibleForward'

      {...props}
    >
      <path d="M18 6.5Q17.175 6.5 16.587 5.912Q16 5.325 16 4.5Q16 3.675 16.587 3.087Q17.175 2.5 18 2.5Q18.825 2.5 19.413 3.087Q20 3.675 20 4.5Q20 5.325 19.413 5.912Q18.825 6.5 18 6.5ZM10 22Q7.925 22 6.463 20.538Q5 19.075 5 17Q5 14.925 6.463 13.462Q7.925 12 10 12V14Q8.75 14 7.875 14.875Q7 15.75 7 17Q7 18.25 7.875 19.125Q8.75 20 10 20Q11.25 20 12.125 19.125Q13 18.25 13 17H15Q15 19.075 13.538 20.538Q12.075 22 10 22ZM19 21Q18.575 21 18.288 20.712Q18 20.425 18 20V16Q18 16 18 16Q18 16 18 16H13Q11.9 16 11.3 15.062Q10.7 14.125 11.15 13.1L13 9H10.725L10.425 9.75Q10.3 10.075 9.975 10.237Q9.65 10.4 9.3 10.3Q8.85 10.175 8.637 9.775Q8.425 9.375 8.6 8.95L8.9 8.2Q9.125 7.625 9.637 7.312Q10.15 7 10.75 7H15.95Q17.075 7 17.663 7.912Q18.25 8.825 17.8 9.85L16.15 13.5H18Q18.825 13.5 19.413 14.087Q20 14.675 20 15.5V20Q20 20.425 19.712 20.712Q19.425 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardRounded.displayName = 'AmauiIconMaterialAccessibleForwardRounded';

export default IconMaterialAccessibleForwardRounded;
