import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOff'

      short_name='CookieOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m815 796-58-58q18-31 29-66.5t14-73.5q-50-22-78.5-60T683 453q-77-11-132-66t-68-132q-49-2-90 10t-76 33l-57-57q61-42 137.5-58.5T563 184q-9 45 6 84.5t45 66.5q30 27 71 37t86-5q-31 69 11 118t96 51q8 72-9.5 138T815 796ZM340 696q-25 0-42.5-17.5T280 636q0-25 17.5-42.5T340 576q25 0 42.5 17.5T400 636q0 25-17.5 42.5T340 696Zm479 332L701 910q-48 32-103.5 49T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-62 17-117.5T146 355L27 236l57-57 792 792-57 57ZM480 896q45 0 85.5-12t76.5-33L205 414q-21 36-33 76.5T160 576q0 133 93.5 226.5T480 896Zm-56-264Zm113-114Z"/>
    </Icon>
  );
});

IconMaterialCookieOff.displayName = 'AmauiIconMaterialCookieOff';

export default IconMaterialCookieOff;
