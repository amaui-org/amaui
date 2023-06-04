import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrap'

      short_name='FormatTextWrap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V4h2v16Zm14 0V4h2v16Zm-7.4-2.45L7.05 14l3.55-3.525 1.4 1.4L10.875 13H13q.825 0 1.413-.588Q15 11.825 15 11t-.587-1.413Q13.825 9 13 9H7V7h6q1.65 0 2.825 1.175Q17 9.35 17 11q0 1.65-1.175 2.825Q14.65 15 13 15h-2.125L12 16.125Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrap.displayName = 'AmauiIconMaterialFormatTextWrap';

export default IconMaterialFormatTextWrap;
