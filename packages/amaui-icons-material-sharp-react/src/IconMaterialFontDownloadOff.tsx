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
      <path d="m20.475 23.3-1.3-1.3H2V4.825L.675 3.5 2.1 2.075l19.8 19.8ZM4 20h13.175L4 6.825Zm18-.875-2-2V4H6.875l-2-2H22Zm-8.5-8.5Zm-2.875 2.825Zm4.975-.725-3.05-3.05-.5-1.425h-.1l-.225.6-1.35-1.35.575-1.5h2.1ZM6.4 18l3.2-8.425 1.4 1.4-.8 2.225h3.025l1.75 1.75H9.6L8.5 18Zm9.1 0-1.425-3.95 3.275 3.275.25.675Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOff.displayName = 'AmauiIconMaterialFontDownloadOff';

export default IconMaterialFontDownloadOff;
