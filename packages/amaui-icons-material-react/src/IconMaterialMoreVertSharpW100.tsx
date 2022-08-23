import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreVertSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVertSharpW100'
      short_name='MoreVert'

      {...props}
    >
      <path d="M12 18.1Q11.7 18.1 11.5 17.9Q11.3 17.7 11.3 17.4Q11.3 17.1 11.5 16.9Q11.7 16.7 12 16.7Q12.3 16.7 12.5 16.9Q12.7 17.1 12.7 17.4Q12.7 17.7 12.5 17.9Q12.3 18.1 12 18.1ZM12 12.7Q11.7 12.7 11.5 12.5Q11.3 12.3 11.3 12Q11.3 11.7 11.5 11.5Q11.7 11.3 12 11.3Q12.3 11.3 12.5 11.5Q12.7 11.7 12.7 12Q12.7 12.3 12.5 12.5Q12.3 12.7 12 12.7ZM12 7.3Q11.7 7.3 11.5 7.1Q11.3 6.9 11.3 6.6Q11.3 6.3 11.5 6.1Q11.7 5.9 12 5.9Q12.3 5.9 12.5 6.1Q12.7 6.3 12.7 6.6Q12.7 6.9 12.5 7.1Q12.3 7.3 12 7.3Z"/>
    </Icon>
  );
});

IconMaterialMoreVertSharpW100.displayName = 'AmauiIconMaterialMoreVertSharpW100';

export default IconMaterialMoreVertSharpW100;
