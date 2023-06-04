import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreviewOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewOffW100Filled'

      short_name='PreviewOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M485 724q-61 0-111-30t-77-78q20-35 51.5-61t72.5-38l23 23q-35 8-64.5 27.5T327 616q29 38 70.5 59t87.5 21q24 0 47-6.5t44-17.5l21 21q-25 15-53 23t-59 8Zm172-84-19-19q1-2 2-2.5t2-2.5q-14-18-30-31.5T577 560l-47-47q47 10 84 37t58 66q-4 6-7 12t-8 12Zm115 268-24-24H172V308l-24-24 20-20 624 624-20 20Zm-572-52h520L200 336v520Zm588-85-28-28V424H441L285 268h503v503Z"/>
    </Icon>
  );
});

IconMaterialPreviewOffW100Filled.displayName = 'AmauiIconMaterialPreviewOffW100Filled';

export default IconMaterialPreviewOffW100Filled;
