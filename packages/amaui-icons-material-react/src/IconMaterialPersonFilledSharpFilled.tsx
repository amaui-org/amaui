import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonFilledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledSharpFilled'
      short_name='PersonFilled'

      {...props}
    >
      <path d="M12 12Q10.35 12 9.175 10.825Q8 9.65 8 8Q8 6.35 9.175 5.175Q10.35 4 12 4Q13.65 4 14.825 5.175Q16 6.35 16 8Q16 9.65 14.825 10.825Q13.65 12 12 12ZM4 20V17.2Q4 16.35 4.438 15.637Q4.875 14.925 5.6 14.55Q7.15 13.775 8.75 13.387Q10.35 13 12 13Q13.65 13 15.25 13.387Q16.85 13.775 18.4 14.55Q19.125 14.925 19.562 15.637Q20 16.35 20 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialPersonFilledSharpFilled.displayName = 'AmauiIconMaterialPersonFilledSharpFilled';

export default IconMaterialPersonFilledSharpFilled;
