import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterFilled'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.075 21.875q-.375 0-.75-.137-.375-.138-.675-.438l-1.4-1.4q-.275-.275-.412-.612-.138-.338-.163-.688-.025-.35.087-.7.113-.35.338-.65l.15-.2L3.1 5.4 7 1.5l12.725 12.725q.3.3.438.662.137.363.137.738t-.137.75q-.138.375-.438.675l-4.25 4.25q-.3.3-.663.438-.362.137-.737.137Zm0-2L18.3 15.65l-1.4-1.425-4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialCarpenterFilled.displayName = 'AmauiIconMaterialCarpenterFilled';

export default IconMaterialCarpenterFilled;
