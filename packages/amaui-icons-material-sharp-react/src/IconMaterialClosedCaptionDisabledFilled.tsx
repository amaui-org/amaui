import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledFilled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-3.3-3.3H3V5.825L.675 3.5 2.1 2.075l19.8 19.8ZM21 18.125l-3.35-3.35H18V13h-1.5v.5h-.125L14.5 11.625V10.5h2v.5H18V9h-5v1.125L6.875 4H21ZM6 15h5v-1.175L10.175 13H9.5v.5h-2v-3.175L6.375 9.2H6Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledFilled.displayName = 'AmauiIconMaterialClosedCaptionDisabledFilled';

export default IconMaterialClosedCaptionDisabledFilled;
