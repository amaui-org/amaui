import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRemoveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveSharpFilled'
      short_name='PersonRemove'

      {...props}
    >
      <path d="M16 11V9H22V11ZM9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 9.65 11.825 10.825Q10.65 12 9 12ZM1 20V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q10.65 13 12.25 13.387Q13.85 13.775 15.4 14.55Q16.125 14.925 16.562 15.637Q17 16.35 17 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveSharpFilled.displayName = 'AmauiIconMaterialPersonRemoveSharpFilled';

export default IconMaterialPersonRemoveSharpFilled;
