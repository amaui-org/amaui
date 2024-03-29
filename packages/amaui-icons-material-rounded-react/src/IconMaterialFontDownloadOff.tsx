import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOff'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.575-.6-.575H4q-.825 0-1.412-.587Q2 20.825 2 20V4.825L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM4 20h13.175L4 6.825V20Zm18-.875-2-2V4H6.875l-2-2H20q.825 0 1.413.587Q22 3.175 22 4Zm-6.4-6.4-3.05-3.05-.5-1.425h-.1l-.225.6-1.35-1.35.2-.525q.175-.425.575-.7Q11.55 6 12 6q.45 0 .863.275.412.275.562.7Zm-5 .675Zm2.85-2.85ZM16.2 18q-.325 0-.563-.175-.237-.175-.362-.475l-1.2-3.3 3.075 3.075q0 .375-.275.625T16.2 18Zm-6.6-3.05-.875 2.4q-.05.15-.15.263-.1.112-.212.199-.113.088-.25.138-.138.05-.288.05-.5 0-.812-.413-.313-.412-.113-.912l2.7-7.1 1.4 1.4-.8 2.225h3.025l1.75 1.75Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOff.displayName = 'AmauiIconMaterialFontDownloadOff';

export default IconMaterialFontDownloadOff;
