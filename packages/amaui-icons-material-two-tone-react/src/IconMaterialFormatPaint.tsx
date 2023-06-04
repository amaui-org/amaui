import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatPaint = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaint'

      short_name='FormatPaint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 4h10v2H6z" opacity=".3"/><path d="M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1zm-1 4H6V4h10v2z"/>
    </Icon>
  );
});

IconMaterialFormatPaint.displayName = 'AmauiIconMaterialFormatPaint';

export default IconMaterialFormatPaint;
