import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindReplaceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceSharpFilled'
      short_name='FindReplace'

      {...props}
    >
      <path d="M4.1 10Q4.45 7.425 6.388 5.713Q8.325 4 11 4Q12.475 4 13.763 4.562Q15.05 5.125 16 6.1V4H18V10H12V8H15Q14.275 7.1 13.262 6.55Q12.25 6 11 6Q9.2 6 7.825 7.137Q6.45 8.275 6.1 10ZM19.6 21 15.2 16.6Q14.3 17.275 13.238 17.637Q12.175 18 11 18Q9.525 18 8.238 17.438Q6.95 16.875 6 15.9V18H4V12H10V14H7Q7.725 14.9 8.738 15.45Q9.75 16 11 16Q12.8 16 14.175 14.863Q15.55 13.725 15.9 12H17.9Q17.775 12.9 17.45 13.688Q17.125 14.475 16.6 15.2L21 19.6Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceSharpFilled.displayName = 'AmauiIconMaterialFindReplaceSharpFilled';

export default IconMaterialFindReplaceSharpFilled;
