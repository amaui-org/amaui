import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltOutlinedW700'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M13.875 18.8 11.675 16.6 14.7 13.575H3.3V10.425H14.7L11.675 7.4L13.875 5.2L20.7 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightAltOutlinedW700;
