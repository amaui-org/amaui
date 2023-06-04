import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorFillW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillW100'

      short_name='FormatColorFill'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17.325 4.725 11.45l5.3-5.225-3.3-3.3L7.2 2.4l9.075 9.075Zm.025-10.6L6.25 10.95q-.125.125-.162.262-.038.138-.038.288h8.9q0-.15-.037-.288-.038-.137-.163-.262ZM18.45 17.9q-.575 0-.962-.388-.388-.387-.388-.962 0-.425.212-.812.213-.388.438-.738.175-.25.35-.475.175-.225.35-.475.175.25.35.475.175.225.35.475.225.35.437.738.213.387.213.812 0 .575-.387.962-.388.388-.963.388ZM2 24v-1.4h20V24Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillW100.displayName = 'AmauiIconMaterialFormatColorFillW100';

export default IconMaterialFormatColorFillW100;
