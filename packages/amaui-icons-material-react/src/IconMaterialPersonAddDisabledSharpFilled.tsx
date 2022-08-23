import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledSharpFilled'
      short_name='PersonAddDisabled'

      {...props}
    >
      <path d="M19.8 22.6 17 19.8V20H1V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q9.325 13 9.638 13.012Q9.95 13.025 10.25 13.05L9.2 12Q9.15 12 9.1 12Q9.05 12 9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 7.95 5 7.9Q5 7.85 5 7.8L1.4 4.2L2.825 2.775L21.225 21.175ZM18 14V11H15V9H18V6H20V9H23V11H20V14ZM12.6 9.7 7.3 4.4Q7.675 4.2 8.113 4.1Q8.55 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 8.45 12.9 8.887Q12.8 9.325 12.6 9.7Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledSharpFilled.displayName = 'AmauiIconMaterialPersonAddDisabledSharpFilled';

export default IconMaterialPersonAddDisabledSharpFilled;
