import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedSharp'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 17Q9.475 17 7.737 15.262Q6 13.525 6 11V3H8.5V11Q8.5 12.475 9.512 13.488Q10.525 14.5 12 14.5Q13.475 14.5 14.488 13.488Q15.5 12.475 15.5 11V3H18V11Q18 13.525 16.262 15.262Q14.525 17 12 17ZM5 21V19H19V21Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedSharp.displayName = 'AmauiIconMaterialFormatUnderlinedSharp';

export default IconMaterialFormatUnderlinedSharp;
