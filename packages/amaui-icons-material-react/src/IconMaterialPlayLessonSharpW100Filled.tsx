import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonSharpW100Filled'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M4.3 20.7V3.3H17.7V11.925Q17.55 11.9 17.35 11.9Q17.15 11.9 17 11.925Q14.725 12.05 13.188 13.688Q11.65 15.325 11.65 17.6Q11.65 18.4 11.887 19.212Q12.125 20.025 12.55 20.7ZM17.35 21.3Q15.8 21.3 14.725 20.225Q13.65 19.15 13.65 17.6Q13.65 16.05 14.725 14.975Q15.8 13.9 17.35 13.9Q18.9 13.9 19.975 14.975Q21.05 16.05 21.05 17.6Q21.05 19.15 19.975 20.225Q18.9 21.3 17.35 21.3ZM16.6 19.3 18.95 17.55 16.6 15.8ZM7.65 9.95 9.5 8.85 11.35 9.95V4H7.65Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonSharpW100Filled.displayName = 'AmauiIconMaterialPlayLessonSharpW100Filled';

export default IconMaterialPlayLessonSharpW100Filled;
