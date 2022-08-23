import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookOnlineSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineSharpFilled'
      short_name='BookOnline'

      {...props}
    >
      <path d="M9 16Q8.575 16 8.288 15.712Q8 15.425 8 15V13Q8.425 13 8.713 12.712Q9 12.425 9 12Q9 11.575 8.713 11.287Q8.425 11 8 11V9Q8 8.575 8.288 8.287Q8.575 8 9 8H15Q15.425 8 15.713 8.287Q16 8.575 16 9V11Q15.575 11 15.288 11.287Q15 11.575 15 12Q15 12.425 15.288 12.712Q15.575 13 16 13V15Q16 15.425 15.713 15.712Q15.425 16 15 16ZM12 10.5Q12.2 10.5 12.35 10.35Q12.5 10.2 12.5 10Q12.5 9.8 12.35 9.65Q12.2 9.5 12 9.5Q11.8 9.5 11.65 9.65Q11.5 9.8 11.5 10Q11.5 10.2 11.65 10.35Q11.8 10.5 12 10.5ZM12 12.5Q12.2 12.5 12.35 12.35Q12.5 12.2 12.5 12Q12.5 11.8 12.35 11.65Q12.2 11.5 12 11.5Q11.8 11.5 11.65 11.65Q11.5 11.8 11.5 12Q11.5 12.2 11.65 12.35Q11.8 12.5 12 12.5ZM12 14.5Q12.2 14.5 12.35 14.35Q12.5 14.2 12.5 14Q12.5 13.8 12.35 13.65Q12.2 13.5 12 13.5Q11.8 13.5 11.65 13.65Q11.5 13.8 11.5 14Q11.5 14.2 11.65 14.35Q11.8 14.5 12 14.5ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineSharpFilled.displayName = 'AmauiIconMaterialBookOnlineSharpFilled';

export default IconMaterialBookOnlineSharpFilled;
