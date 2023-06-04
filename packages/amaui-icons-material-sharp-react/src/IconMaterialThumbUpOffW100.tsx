import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffW100'

      short_name='ThumbUpOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.55 19.7V9.3l6.05-5.95.575.575L13.1 9.3h8.6v2.8l-3.2 7.6Zm.7-.7h9.775L21 11.975V10h-8.75l1.1-5.45-5.1 5.05Zm0-9.4V19Zm-.7-.3v.7H4v9h3.55v.7H3.3V9.3Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffW100.displayName = 'AmauiIconMaterialThumbUpOffW100';

export default IconMaterialThumbUpOffW100;
