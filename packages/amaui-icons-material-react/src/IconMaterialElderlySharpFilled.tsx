import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElderlySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlySharpFilled'
      short_name='Elderly'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM8 23 6.4 21.8 9 18.325V13Q9 12.125 9.125 11.275Q9.25 10.425 9.5 9.6L8 10.45V14H6V9.3L11.4 6.225Q11.825 5.975 12.35 5.987Q12.875 6 13.35 6.275Q13.625 6.425 13.825 6.637Q14.025 6.85 14.15 7.125L14.925 8.8Q15.4 9.8 16.363 10.4Q17.325 11 18.5 11Q19.125 11 19.562 11.438Q20 11.875 20 12.5V23H19V12.5Q19 12.3 18.85 12.15Q18.7 12 18.5 12Q18.3 12 18.15 12.15Q18 12.3 18 12.5V13.5H17V12.8Q17 12.8 17 12.8Q17 12.8 17 12.8Q15.9 12.525 15 11.875Q14.1 11.225 13.5 10.3Q13.2 11.175 13.088 11.987Q12.975 12.8 13.025 13.7L15 16.5V23H13V18L11.225 15.45L11 19Z"/>
    </Icon>
  );
});

IconMaterialElderlySharpFilled.displayName = 'AmauiIconMaterialElderlySharpFilled';

export default IconMaterialElderlySharpFilled;
