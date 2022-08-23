import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartToySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToySharpFilled'
      short_name='SmartToy'

      {...props}
    >
      <path d="M4 21V15H1V9H4V5H9V2H15V5H20V9H23V15H20V21ZM9 13Q9.625 13 10.062 12.562Q10.5 12.125 10.5 11.5Q10.5 10.875 10.062 10.438Q9.625 10 9 10Q8.375 10 7.938 10.438Q7.5 10.875 7.5 11.5Q7.5 12.125 7.938 12.562Q8.375 13 9 13ZM15 13Q15.625 13 16.062 12.562Q16.5 12.125 16.5 11.5Q16.5 10.875 16.062 10.438Q15.625 10 15 10Q14.375 10 13.938 10.438Q13.5 10.875 13.5 11.5Q13.5 12.125 13.938 12.562Q14.375 13 15 13ZM8 17H16V15H8Z"/>
    </Icon>
  );
});

IconMaterialSmartToySharpFilled.displayName = 'AmauiIconMaterialSmartToySharpFilled';

export default IconMaterialSmartToySharpFilled;
