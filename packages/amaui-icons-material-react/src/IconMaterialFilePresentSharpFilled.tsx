import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilePresentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentSharpFilled'
      short_name='FilePresent'

      {...props}
    >
      <path d="M20 22H4V2H15L20 7ZM12 19Q13.675 19 14.838 17.825Q16 16.65 16 15V11H14V15Q14 15.825 13.425 16.413Q12.85 17 12 17Q11.175 17 10.588 16.413Q10 15.825 10 15V9.5Q10 9.275 10.15 9.137Q10.3 9 10.5 9Q10.725 9 10.863 9.137Q11 9.275 11 9.5V15H13V9.5Q13 8.45 12.275 7.725Q11.55 7 10.5 7Q9.45 7 8.725 7.725Q8 8.45 8 9.5V15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM14 8H18L14 4Z"/>
    </Icon>
  );
});

IconMaterialFilePresentSharpFilled.displayName = 'AmauiIconMaterialFilePresentSharpFilled';

export default IconMaterialFilePresentSharpFilled;
