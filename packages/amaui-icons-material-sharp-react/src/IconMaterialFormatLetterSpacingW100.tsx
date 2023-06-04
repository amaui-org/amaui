import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingW100'

      short_name='FormatLetterSpacing'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M346 925 222 801l124-123 20 20-90 89h407l-89-89 20-20 123 123-124 124-20-20 90-90H276l89 90-19 20Zm-94-375V228h28v322h-28Zm214 0V228h28v322h-28Zm214 0V228h28v322h-28Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingW100.displayName = 'AmauiIconMaterialFormatLetterSpacingW100';

export default IconMaterialFormatLetterSpacingW100;
