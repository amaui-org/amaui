import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHistoryEduSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryEduSharpFilled'
      short_name='HistoryEdu'

      {...props}
    >
      <path d="M8 20Q7.175 20 6.588 19.413Q6 18.825 6 18V15H9V12.75Q8.125 12.7 7.338 12.362Q6.55 12.025 5.9 11.35V10.25H4.75L1.5 7Q2.4 5.85 3.725 5.375Q5.05 4.9 6.4 4.9Q7.075 4.9 7.713 5Q8.35 5.1 9 5.375V4H21V17Q21 18.25 20.125 19.125Q19.25 20 18 20ZM11 15H17V17Q17 17.425 17.288 17.712Q17.575 18 18 18Q18.425 18 18.712 17.712Q19 17.425 19 17V6H11V6.6L17 12.6V14H15.6L12.75 11.15L12.55 11.35Q12.2 11.7 11.812 11.975Q11.425 12.25 11 12.4ZM5.6 8.25H7.9V10.4Q8.2 10.6 8.525 10.675Q8.85 10.75 9.2 10.75Q9.775 10.75 10.238 10.575Q10.7 10.4 11.15 9.95L11.35 9.75L9.95 8.35Q9.225 7.625 8.325 7.262Q7.425 6.9 6.4 6.9Q5.9 6.9 5.45 6.975Q5 7.05 4.55 7.2Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduSharpFilled.displayName = 'AmauiIconMaterialHistoryEduSharpFilled';

export default IconMaterialHistoryEduSharpFilled;
