import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial360Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='360Sharp'
      short_name='360'

      {...props}
    >
      <path d="M9 20 7.6 18.6 9.35 16.8Q6.15 16.375 4.075 15.05Q2 13.725 2 12Q2 9.925 4.888 8.462Q7.775 7 12 7Q16.225 7 19.113 8.462Q22 9.925 22 12Q22 13.55 20.337 14.775Q18.675 16 16 16.6V14.55Q17.925 14.05 18.962 13.312Q20 12.575 20 12Q20 11.2 17.863 10.1Q15.725 9 12 9Q8.275 9 6.138 10.1Q4 11.2 4 12Q4 12.6 5.275 13.438Q6.55 14.275 8.9 14.7L7.6 13.4L9 12L13 16Z"/>
    </Icon>
  );
});

IconMaterial360Sharp.displayName = 'AmauiIconMaterial360Sharp';

export default IconMaterial360Sharp;
