import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacing2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacing2'

      short_name='FormatLetterSpacing2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80 80-240l160-160 57 56-64 64h494l-63-64 56-56 160 160L720-80l-57-56 64-64H233l63 64-56 56Zm36-360 164-440h80l164 440h-76l-38-112H392l-40 112h-76Zm138-176h132l-64-182h-4l-64 182Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacing2.displayName = 'AmauiIconMaterialFormatLetterSpacing2';

export default IconMaterialFormatLetterSpacing2;
