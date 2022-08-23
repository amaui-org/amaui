import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuizSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizSharp'
      short_name='Quiz'

      {...props}
    >
      <path d="M13.25 11.8H14.75Q14.75 11.075 14.9 10.737Q15.05 10.4 15.6 9.85Q16.35 9.1 16.6 8.637Q16.85 8.175 16.85 7.55Q16.85 6.425 16.062 5.713Q15.275 5 14 5Q12.975 5 12.213 5.575Q11.45 6.15 11.15 7.1L12.5 7.65Q12.725 7.025 13.113 6.712Q13.5 6.4 14 6.4Q14.6 6.4 14.975 6.737Q15.35 7.075 15.35 7.65Q15.35 8 15.15 8.312Q14.95 8.625 14.45 9.1Q13.625 9.825 13.438 10.237Q13.25 10.65 13.25 11.8ZM14 15Q14.425 15 14.738 14.688Q15.05 14.375 15.05 13.95Q15.05 13.525 14.738 13.212Q14.425 12.9 14 12.9Q13.575 12.9 13.263 13.212Q12.95 13.525 12.95 13.95Q12.95 14.375 13.263 14.688Q13.575 15 14 15ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialQuizSharp.displayName = 'AmauiIconMaterialQuizSharp';

export default IconMaterialQuizSharp;
