import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuizSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizSharpW100'
      short_name='Quiz'

      {...props}
    >
      <path d="M13 11.7H13.7Q13.75 11.1 13.913 10.787Q14.075 10.475 14.7 9.9Q15.3 9.375 15.55 8.925Q15.8 8.475 15.8 7.9Q15.8 6.925 15.1 6.262Q14.4 5.6 13.35 5.6Q12.575 5.6 11.963 6.012Q11.35 6.425 11 7.15L11.65 7.45Q11.95 6.875 12.363 6.588Q12.775 6.3 13.35 6.3Q14.1 6.3 14.6 6.75Q15.1 7.2 15.1 7.9Q15.1 8.325 14.863 8.688Q14.625 9.05 14.05 9.55Q13.475 10.05 13.238 10.525Q13 11 13 11.7ZM13.35 14.4Q13.625 14.4 13.838 14.188Q14.05 13.975 14.05 13.7Q14.05 13.425 13.838 13.212Q13.625 13 13.35 13Q13.075 13 12.863 13.212Q12.65 13.425 12.65 13.7Q12.65 13.975 12.863 14.188Q13.075 14.4 13.35 14.4ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialQuizSharpW100.displayName = 'AmauiIconMaterialQuizSharpW100';

export default IconMaterialQuizSharpW100;
