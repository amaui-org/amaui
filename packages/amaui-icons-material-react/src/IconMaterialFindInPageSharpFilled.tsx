import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageSharpFilled'
      short_name='FindInPage'

      {...props}
    >
      <path d="M4 22V2H15L20 8V19.65L15.45 15Q15.725 14.575 15.863 14.075Q16 13.575 16 13Q16 11.35 14.825 10.175Q13.65 9 12 9Q10.35 9 9.175 10.175Q8 11.35 8 13Q8 14.65 9.175 15.825Q10.35 17 12 17Q12.575 17 13.075 16.863Q13.575 16.725 14 16.45L19.55 22ZM12 15Q11.175 15 10.588 14.412Q10 13.825 10 13Q10 12.175 10.588 11.587Q11.175 11 12 11Q12.825 11 13.413 11.587Q14 12.175 14 13Q14 13.825 13.413 14.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialFindInPageSharpFilled.displayName = 'AmauiIconMaterialFindInPageSharpFilled';

export default IconMaterialFindInPageSharpFilled;
