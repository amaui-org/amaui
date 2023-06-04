import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPixel33xl3aFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pixel33xl3aFilled'

      short_name='Pixel33xl3a'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 336q17 0 28.5-11.5T400 296q0-17-11.5-28.5T360 256q-17 0-28.5 11.5T320 296q0 17 11.5 28.5T360 336Zm-80 680q-33 0-56.5-23.5T200 936V216q0-33 23.5-56.5T280 136h400q33 0 56.5 23.5T760 216v720q0 33-23.5 56.5T680 1016H280Z"/>
    </Icon>
  );
});

IconMaterialPixel33xl3aFilled.displayName = 'AmauiIconMaterialPixel33xl3aFilled';

export default IconMaterialPixel33xl3aFilled;
