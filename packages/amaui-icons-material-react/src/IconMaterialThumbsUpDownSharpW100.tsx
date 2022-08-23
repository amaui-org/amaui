import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownSharpW100'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M0.65 13.05V5.4L5.4 0.65L5.95 1.2L5 5.35H11.35V7.225L8.8 13.05ZM1.35 12.35H8.35L10.65 7V6.05H4.15L5.05 2L1.35 5.7ZM18.6 23.35 18.05 22.8 19 18.65H12.65V16.775L15.2 10.95H23.35V18.6ZM18.95 22 22.65 18.3V11.65H15.65L13.35 17V17.95H19.85ZM1.35 12.35V5.7V6.05V7V12.35ZM22.65 18.3V17.95V17V11.65V18.3Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownSharpW100.displayName = 'AmauiIconMaterialThumbsUpDownSharpW100';

export default IconMaterialThumbsUpDownSharpW100;
