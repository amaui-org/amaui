import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInterestsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsSharpFilled'
      short_name='Interests'

      {...props}
    >
      <path d="M2 11 7 2 12 11ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.325 4.175 14.162Q5.35 13 7 13Q8.65 13 9.825 14.175Q11 15.35 11 17Q11 18.65 9.825 19.825Q8.65 21 7 21ZM13 21V13H21V21ZM17 11Q15.575 9.8 14.613 8.975Q13.65 8.15 13.075 7.525Q12.5 6.9 12.25 6.35Q12 5.8 12 5.175Q12 4.05 12.788 3.275Q13.575 2.5 14.75 2.5Q15.425 2.5 16.013 2.812Q16.6 3.125 17 3.675Q17.4 3.125 17.988 2.812Q18.575 2.5 19.25 2.5Q20.425 2.5 21.212 3.275Q22 4.05 22 5.175Q22 5.8 21.75 6.35Q21.5 6.9 20.925 7.525Q20.35 8.15 19.388 8.975Q18.425 9.8 17 11Z"/>
    </Icon>
  );
});

IconMaterialInterestsSharpFilled.displayName = 'AmauiIconMaterialInterestsSharpFilled';

export default IconMaterialInterestsSharpFilled;
