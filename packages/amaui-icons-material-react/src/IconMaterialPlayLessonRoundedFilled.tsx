import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonRoundedFilled'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V4Q3 3.175 3.587 2.587Q4.175 2 5 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V11.075Q18.75 11.025 18.462 11.012Q18.175 11 18 11Q15.125 11 13.062 13.037Q11 15.075 11 18Q11 19.075 11.325 20.1Q11.65 21.125 12.275 22ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM17.525 20.025 20.075 18.425Q20.3 18.275 20.3 18Q20.3 17.725 20.075 17.575L17.525 15.975Q17.25 15.825 17 15.963Q16.75 16.1 16.75 16.4V19.6Q16.75 19.9 17 20.038Q17.25 20.175 17.525 20.025ZM7.75 10.55 9.5 9.5 11.25 10.55Q11.5 10.7 11.75 10.55Q12 10.4 12 10.125V4H7V10.125Q7 10.4 7.25 10.55Q7.5 10.7 7.75 10.55Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonRoundedFilled.displayName = 'AmauiIconMaterialPlayLessonRoundedFilled';

export default IconMaterialPlayLessonRoundedFilled;
