import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffSharpFilled'
      short_name='FontDownloadOff'

      {...props}
    >
      <path d="M20.475 23.3 19.175 22H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 15.6 12.725 13.05 6H10.95L10.375 7.5L4.875 2H22ZM6.4 18H8.5L9.6 14.95H12.125L10.325 13.15L8.8 11.625ZM15.175 18ZM12.55 9.675 12.05 8.25H11.95L11.725 8.85Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffSharpFilled.displayName = 'AmauiIconMaterialFontDownloadOffSharpFilled';

export default IconMaterialFontDownloadOffSharpFilled;
