import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayLessonSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonSharpW100'
      short_name='PlayLesson'

      {...props}
    >
      <path d="M4.3 20.7V3.3H17.7V11.925Q17.55 11.9 17.35 11.9Q17.15 11.9 17 11.925V4H11.35V9.95L9.5 8.85L7.65 9.95V4H5V20H12.2Q12.25 20.2 12.338 20.375Q12.425 20.55 12.55 20.7ZM17.35 21.3Q15.8 21.3 14.725 20.225Q13.65 19.15 13.65 17.6Q13.65 16.05 14.725 14.975Q15.8 13.9 17.35 13.9Q18.9 13.9 19.975 14.975Q21.05 16.05 21.05 17.6Q21.05 19.15 19.975 20.225Q18.9 21.3 17.35 21.3ZM16.6 19.3 18.95 17.55 16.6 15.8ZM7.65 4H9.5H11.35H7.65ZM5 4H7.65H9.5H11.35H17Q14.725 4 13.188 4Q11.65 4 11.65 4Q11.65 4 11.788 4Q11.925 4 12.2 4Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonSharpW100.displayName = 'AmauiIconMaterialPlayLessonSharpW100';

export default IconMaterialPlayLessonSharpW100;
