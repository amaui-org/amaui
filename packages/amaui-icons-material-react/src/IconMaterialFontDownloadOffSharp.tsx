import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffSharp'
      short_name='FontDownloadOff'

      {...props}
    >
      <path d="M20.475 23.3 19.175 22H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM4 20H17.175L15.175 18L12.125 14.95H9.6L8.5 18H6.4L8.8 11.625L4 6.825ZM22 19.125 20 17.125V4H6.875L4.875 2H22ZM10.3 13ZM15.6 12.725 12.55 9.675 12.05 8.25H11.95L11.725 8.85L10.375 7.5L10.95 6H13.05ZM13.5 10.625ZM10.625 13.45Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffSharp.displayName = 'AmauiIconMaterialFontDownloadOffSharp';

export default IconMaterialFontDownloadOffSharp;
