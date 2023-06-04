import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataW100'

      short_name='1xMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.35q-.15 0-.25-.1t-.1-.25V8.35H5q-.15 0-.25-.1T4.65 8q0-.15.1-.25t.25-.1h1.6q.325 0 .538.212.212.213.212.538V16q0 .15-.1.25t-.25.1Zm5.125 0q-.25 0-.337-.162-.088-.163.037-.363L14.25 11.7l-2.1-3.475q-.125-.225-.037-.4.087-.175.362-.175.075 0 .15.05t.125.1L14.7 11l1.925-3.2q.05-.05.113-.1.062-.05.137-.05.25 0 .337.162.088.163-.037.363L15.1 11.7l2.425 4.075q.125.2.013.388-.113.187-.363.187-.075 0-.15-.05t-.125-.1l-2.25-3.8-2.25 3.8q-.05.05-.125.1t-.15.05Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataW100.displayName = 'AmauiIconMaterial1xMobiledataW100';

export default IconMaterial1xMobiledataW100;
