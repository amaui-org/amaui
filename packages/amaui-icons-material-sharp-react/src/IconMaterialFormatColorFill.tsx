import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorFill = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFill'

      short_name='FormatColorFill'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.6 2.4 10l6.175-6.2-2.4-2.4L7.6 0l10 10Zm0-12.375L5.225 10h9.55ZM19 17q-.825 0-1.413-.587Q17 15.825 17 15q0-.525.312-1.125.313-.6.688-1.125.225-.3.475-.625.25-.325.525-.625.275.3.525.625t.475.625q.375.525.688 1.125.312.6.312 1.125 0 .825-.587 1.413Q19.825 17 19 17ZM2 24v-4h20v4Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFill.displayName = 'AmauiIconMaterialFormatColorFill';

export default IconMaterialFormatColorFill;
