import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledSharp'
      short_name='ClosedCaptionDisabled'

      {...props}
    >
      <path d="M20.475 23.3 17.175 20H3V5.825L0.675 3.5L2.1 2.075L21.9 21.875ZM15.175 18 7.675 10.5H7.5V13.5H9.5V13H11V15H6V9H6.175L5 7.825V18ZM6.875 4H21V18.125L19 16.125V6H8.875ZM18 13V15H17.875L16.375 13.5H16.5V13ZM16.5 11V10.5H14.5V11.625L13 10.125V9H18V11ZM13.95 11.05ZM10.1 12.9Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledSharp.displayName = 'AmauiIconMaterialClosedCaptionDisabledSharp';

export default IconMaterialClosedCaptionDisabledSharp;
