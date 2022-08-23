import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumRoundedW100'
      short_name='Forum'

      {...props}
    >
      <path d="M3.8 14.125V4Q3.8 3.7 4 3.5Q4.2 3.3 4.5 3.3H16.1Q16.4 3.3 16.6 3.5Q16.8 3.7 16.8 4V11.6Q16.8 11.9 16.6 12.1Q16.4 12.3 16.1 12.3H6.6L4.475 14.425Q4.275 14.625 4.038 14.512Q3.8 14.4 3.8 14.125ZM4.5 4V11.6V4ZM7.3 15.7Q7 15.7 6.8 15.5Q6.6 15.3 6.6 15V14.3H17.975L18.8 15.125V6H19.5Q19.8 6 20 6.2Q20.2 6.4 20.2 6.7V17.525Q20.2 17.8 19.963 17.913Q19.725 18.025 19.525 17.825L17.4 15.7ZM16.1 4H4.5V13.4L6.3 11.6H16.1Z"/>
    </Icon>
  );
});

IconMaterialForumRoundedW100.displayName = 'AmauiIconMaterialForumRoundedW100';

export default IconMaterialForumRoundedW100;
