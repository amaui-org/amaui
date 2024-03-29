import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffFilled'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.125-6.4-6.4L13.05 6h-2.1l-.575 1.5-5.5-5.5H22Zm-9.45-9.45-.5-1.425h-.1l-.225.6ZM20.475 23.3l-8.35-8.35 1.95-.9 6.875 6.875V22H2V4.825L.675 3.5 2.1 2.075l19.8 19.8ZM6.4 18h2.1l1.1-3.05h2.525l-1.85-1.85L8.8 11.625Zm9.1 0h2.1l-.25-.675-3.275-3.275Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffFilled.displayName = 'AmauiIconMaterialFontDownloadOffFilled';

export default IconMaterialFontDownloadOffFilled;
