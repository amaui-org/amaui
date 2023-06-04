import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftClick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftClick'

      short_name='LeftClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M468 816q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480 416q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm182 9-30 91q-5 14-19 13.5T582 915l-91-303q-4-11 5-20t20-5l303 91q14 5 14.5 19T820 716l-91 30 132 132q17 17 17 39t-17 39q-17 17-39.5 17T782 956L650 825Z"/>
    </Icon>
  );
});

IconMaterialLeftClick.displayName = 'AmauiIconMaterialLeftClick';

export default IconMaterialLeftClick;
