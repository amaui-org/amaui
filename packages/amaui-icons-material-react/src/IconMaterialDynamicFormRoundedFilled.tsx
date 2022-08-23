import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormRoundedFilled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M4 11Q3.175 11 2.588 10.412Q2 9.825 2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H13V11ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15Q2 14.175 2.588 13.587Q3.175 13 4 13H15V20ZM17.95 17.9Q17.775 18.275 17.388 18.2Q17 18.125 17 17.7V11H15.5Q15.3 11 15.15 10.85Q15 10.7 15 10.5V4.5Q15 4.3 15.15 4.15Q15.3 4 15.5 4H21.25Q21.525 4 21.675 4.212Q21.825 4.425 21.725 4.675L20 9H21.225Q21.5 9 21.65 9.225Q21.8 9.45 21.675 9.7ZM5.5 17.25Q5.8 17.25 6.025 17.038Q6.25 16.825 6.25 16.5Q6.25 16.175 6.05 15.963Q5.85 15.75 5.525 15.75Q5.2 15.75 4.975 15.963Q4.75 16.175 4.75 16.5Q4.75 16.825 4.963 17.038Q5.175 17.25 5.5 17.25ZM5.5 8.25Q5.825 8.25 6.037 8.037Q6.25 7.825 6.25 7.5Q6.25 7.175 6.037 6.963Q5.825 6.75 5.5 6.75Q5.175 6.75 4.963 6.963Q4.75 7.175 4.75 7.5Q4.75 7.825 4.975 8.037Q5.2 8.25 5.5 8.25Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormRoundedFilled.displayName = 'AmauiIconMaterialDynamicFormRoundedFilled';

export default IconMaterialDynamicFormRoundedFilled;
