import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOffW100Filled'

      short_name='FontDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.9-6.675-6.675-1.7-4.75q-.05-.1-.125-.163-.075-.062-.2-.062t-.2.062q-.075.063-.125.163L11.05 8.25 6.1 3.3h13.1q.625 0 1.063.437.437.438.437 1.063Zm-12.475-.45q.125 0 .213-.063.087-.062.137-.187l1-2.75h3.875l-.7-.7H9.8l.8-2.175-.55-.525L7.9 17q-.05.175.038.312.087.138.287.138ZM12.9 10.1l-.85-2.4h-.1l-.375 1.075Zm2.85 7.35q.2 0 .288-.138.087-.137.037-.337l-.5-1.4-1.125-1.125.975 2.775q.05.125.125.175.075.05.2.05Zm5.3 4.6-7.6-7.6h1l5.8 5.8q-.2.2-.475.325-.275.125-.575.125H4.8q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V4.8q0-.125.012-.225.013-.1.063-.2L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadOffW100Filled.displayName = 'AmauiIconMaterialFontDownloadOffW100Filled';

export default IconMaterialFontDownloadOffW100Filled;
