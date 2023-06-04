import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diamond'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 2 9l3-6h14l3 6ZM9.625 8h4.75l-1.5-3h-1.75ZM11 16.675V10H5.45Zm2 0L18.55 10H13ZM16.6 8h2.65l-1.5-3H15.1ZM4.75 8H7.4l1.5-3H6.25Z"/>
    </Icon>
  );
});

IconMaterialDiamond.displayName = 'AmauiIconMaterialDiamond';

export default IconMaterialDiamond;
